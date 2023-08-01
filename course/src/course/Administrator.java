package course;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

class Administrator extends User {
    public Administrator(String username, String password) {
        super(username, password);
    }

    @Override
    public void showOptions(Scanner scanner, Connection connection) {
        while (true) {
            System.out.println("Administrator Options:");
            System.out.println("1. Manage Courses");
            System.out.println("2. Logout");
            System.out.print("Enter your choice: ");
            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    manageCourses(scanner, connection);
                    break;
                case 2:
                    System.out.println("Logged out successfully.");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void manageCourses(Scanner scanner, Connection connection) {
        while (true) {
            System.out.println("Course Management Options:");
            System.out.println("1. Add New Course");
            System.out.println("2. Update Course");
            System.out.println("3. Delete Course");
            System.out.println("4. Go Back");
            System.out.print("Enter your choice: ");
            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    addNewCourse(scanner, connection);
                    break;
                case 2:
                    updateCourse(scanner, connection);
                    break;
                case 3:
                    deleteCourse(scanner, connection);
                    break;
                case 4:
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void addNewCourse(Scanner scanner, Connection connection) {
        System.out.println("Add New Course");

        System.out.print("Enter course name: ");
        String courseName = scanner.nextLine();

        System.out.print("Enter instructor name: ");
        String instructorName = scanner.nextLine();

        System.out.print("Enter available seats: ");
        int availableSeats = Integer.parseInt(scanner.nextLine());

        String sql = "INSERT INTO courses (name, instructor, available_seats) VALUES (?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, courseName);
            preparedStatement.setString(2, instructorName);
            preparedStatement.setInt(3, availableSeats);

            int rowsInserted = preparedStatement.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("New course added successfully!");
            } else {
                System.out.println("Failed to add the course.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void updateCourse(Scanner scanner, Connection connection) {
        System.out.println("Update Course");

        System.out.print("Enter course ID to update: ");
        int courseId = Integer.parseInt(scanner.nextLine());

        System.out.print("Enter new course name: ");
        String newCourseName = scanner.nextLine();

        System.out.print("Enter new instructor name: ");
        String newInstructorName = scanner.nextLine();

        System.out.print("Enter new available seats: ");
        int newAvailableSeats = Integer.parseInt(scanner.nextLine());

        String sql = "UPDATE courses SET name = ?, instructor = ?, available_seats = ? WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, newCourseName);
            preparedStatement.setString(2, newInstructorName);
            preparedStatement.setInt(3, newAvailableSeats);
            preparedStatement.setInt(4, courseId);

            int rowsUpdated = preparedStatement.executeUpdate();
            if (rowsUpdated > 0) {
                System.out.println("Course updated successfully!");
            } else {
                System.out.println("Failed to update the course. Make sure the course ID is correct.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void deleteCourse(Scanner scanner, Connection connection) {
        System.out.println("Delete Course");

        System.out.print("Enter course ID to delete: ");
        int courseId = Integer.parseInt(scanner.nextLine());

        String sql = "DELETE FROM courses WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, courseId);

            int rowsDeleted = preparedStatement.executeUpdate();
            if (rowsDeleted > 0) {
                System.out.println("Course deleted successfully!");
            } else {
                System.out.println("Failed to delete the course. Make sure the course ID is correct.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
