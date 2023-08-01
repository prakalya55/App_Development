package course;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        // Database credentials
    
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            }
       
        String url = "jdbc:mysql://localhost:3306/tab555";
        String username = "root";
        String password = "prakalya!555";

        try (Scanner scanner = new Scanner(System.in);
             Connection connection = DriverManager.getConnection(url, username, password)) {

            System.out.println("Welcome to Course Registration!");

            while (true) {
                System.out.println("Choose an option:");
                System.out.println("1. Student Login");
                System.out.println("2. Student Registration");
                System.out.println("3. Administrator Login");
                System.out.println("4. Exit");
                System.out.print("Enter your choice: ");
                int choice = Integer.parseInt(scanner.nextLine());

                switch (choice) {
                    case 1:
                        studentLogin(scanner, connection);
                        break;
                    case 2:
                        studentRegistration(scanner, connection);
                        break;
                    case 3:
                        adminLogin(scanner, connection);
                        break;
                    case 4:
                        System.out.println("Thank you for using Course Registration. Goodbye!");
                        return;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void studentRegistration(Scanner scanner, Connection connection) {
        System.out.println("Student Registration");

        System.out.print("Enter username: ");
        String username = scanner.nextLine();

        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        System.out.print("Enter email: ");
        String email = scanner.nextLine();

        System.out.print("Enter phone: ");
        String phone = scanner.nextLine();

        System.out.print("Enter address: ");
        String address = scanner.nextLine();

        // Insert the new student into the "students" table
        String sql = "INSERT INTO students (username, password, email, phone, address) VALUES (?, ?, ?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, username);
            preparedStatement.setString(2, password);
            preparedStatement.setString(3, email);
            preparedStatement.setString(4, phone);
            preparedStatement.setString(5, address);

            int rowsInserted = preparedStatement.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("Student registered successfully!");
            } else {
                System.out.println("Failed to register student.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
	private static void studentLogin(Scanner scanner, Connection connection) {
        System.out.println("Student Login");
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        Student student = new Student(username, password);
        if (student.isUserExist(connection, "students", username, password)) {
            System.out.println("Login successful!");
            student.showOptions(scanner, connection);
        } else {
            System.out.println("Invalid username or password.");
        }
    }

    private static void adminLogin(Scanner scanner, Connection connection) {
        System.out.println("Administrator Login");
        System.out.print("Enter username: ");
        String username = scanner.nextLine();
        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        Administrator administrator = new Administrator(username, password);
        if (administrator.isUserExist(connection, "administrators", username, password)) {
            System.out.println("Login successful!");
            administrator.showOptions(scanner, connection);
        } else {
            System.out.println("Invalid username or password.");
        }
    }

    // Implement other methods for Main
    // ...
}
