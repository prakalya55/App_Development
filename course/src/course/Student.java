package course;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

class Student extends User {
    public Student(String username, String password) {
        super(username, password);
    }

    @Override
    public void showOptions(Scanner scanner, Connection connection) {
        while (true) {
            System.out.println("Student Options:");
            System.out.println("1. View Available Courses");
            System.out.println("2. Register for a Course");
            System.out.println("3. View Registered Courses");
            System.out.println("4. Logout");
            System.out.print("Enter your choice: ");
            int choice = Integer.parseInt(scanner.nextLine());

            switch (choice) {
                case 1:
                    displayAvailableCourses(connection);
                    break;
                case 2:
                    registerStudentForCourse(scanner, connection, getUsername());
                    break;
                case 3:
                    viewRegisteredCourses(connection, getUsername());
                    break;
                case 4:
                    System.out.println("Logged out successfully.");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void registerStudentForCourse(Scanner scanner, Connection connection, String username) {
        System.out.print("Enter course ID to register: ");
        int courseId = Integer.parseInt(scanner.nextLine());

        int studentId = getStudentId(connection, username);
        if (studentId == -1) {
            System.out.println("Failed to register. Student not found.");
            return;
        }

        // Check if the course exists and has available seats
        if (!isCourseAvailable(connection, courseId)) {
            System.out.println("Course not found or no available seats.");
            return;
        }

        // Check if the student is already registered for the course
        if (isStudentRegistered(connection, studentId, courseId)) {
            System.out.println("You are already registered for this course.");
            return;
        }

        String sql = "INSERT INTO registrations (student_id, course_id) VALUES (?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, studentId);
            preparedStatement.setInt(2, courseId);
            int rowsInserted = preparedStatement.executeUpdate();

            if (rowsInserted > 0) {
                // Update available seats in the courses table
                String updateSql = "UPDATE courses SET available_seats = available_seats - 1 WHERE id = ?";
                try (PreparedStatement updateStatement = connection.prepareStatement(updateSql)) {
                    updateStatement.setInt(1, courseId);
                    updateStatement.executeUpdate();
                }
                System.out.println("Registered successfully");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static int getStudentId(Connection connection, String username) {
        String sql = "SELECT id FROM students WHERE username = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setString(1, username);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    return resultSet.getInt("id");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return -1; // Return -1 if the student with the given username is not found
    }

    private static boolean isCourseAvailable(Connection connection, int courseId) {
        String sql = "SELECT available_seats FROM courses WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, courseId);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                if (resultSet.next()) {
                    int availableSeats = resultSet.getInt("available_seats");
                    return availableSeats > 0;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false; // Return false if the course doesn't exist or has no available seats
    }

    private static boolean isStudentRegistered(Connection connection, int studentId, int courseId) {
        String sql = "SELECT * FROM registrations WHERE student_id = ? AND course_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, studentId);
            preparedStatement.setInt(2, courseId);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                return resultSet.next();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false; // Return false if an error occurs or the student is not registered for the course
    }

    private static void viewRegisteredCourses(Connection connection, String username) {
        int studentId = getStudentId(connection, username);
        if (studentId == -1) {
            System.out.println("Student not found.");
            return;
        }

        String sql = "SELECT c.id, c.name, c.instructor FROM courses c " +
                     "INNER JOIN registrations r ON c.id = r.course_id " +
                     "WHERE r.student_id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
            preparedStatement.setInt(1, studentId);
            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                System.out.println("Registered Courses:");
                System.out.println("ID\tName\t\tInstructor");
                while (resultSet.next()) {
                    int courseId = resultSet.getInt("id");
                    String courseName = resultSet.getString("name");
                    String instructor = resultSet.getString("instructor");
                    System.out.println(courseId + "\t" + courseName + "\t" + instructor);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    private static void displayAvailableCourses(Connection connection) {
        String sql = "SELECT * FROM courses WHERE available_seats > 0";
        try (PreparedStatement preparedStatement = connection.prepareStatement(sql);
             ResultSet resultSet = preparedStatement.executeQuery()) {
            System.out.println("Available Courses:");
            System.out.println("ID\tName\t\tInstructor\tAvailable Seats");
            while (resultSet.next()) {
                int courseId = resultSet.getInt("id");
                String courseName = resultSet.getString("name");
                String instructor = resultSet.getString("instructor");
                int availableSeats = resultSet.getInt("available_seats");
                System.out.println(courseId + "\t" + courseName + "\t" + instructor + "\t\t" + availableSeats);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}

