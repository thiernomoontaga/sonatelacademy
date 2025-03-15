#include "controller.h"

void handleStudentLogin()
{
    char email[50], password[50];
    printf("Enter email: ");
    scanf("%s", email);
    printf("Enter password: ");
    scanf("%s", password);

    User *user = findUserByEmail(email);
    if (user && strcmp(user->password, password) == 0)
    {
        printf("Login successful!\n");
        int choice;
        do
        {
            displayStudentMenu();
            scanf("%d", &choice);
            switch (choice)
            {
            case 1:
                // Acheter un cours
                break;
            case 2:
                // Passer une certification
                break;
            case 3:
                displayCertifications(user->id);
                break;
            case 4:
                printf("Logging out...\n");
                break;
            default:
                printf("Invalid choice!\n");
            }
        } while (choice != 4);
    }
    else
    {
        printf("Login failed!\n");
    }
}

void handleProfessorLogin()
{
    // Implémente la logique de connexion pour les professeurs
}

void handleAdminLogin()
{
    // Implémente la logique de connexion pour les administrateurs
}

void handleStudentRegistration()
{
    User user;
    printf("Enter name: ");
    scanf("%s", user.name);
    printf("Enter email: ");
    scanf("%s", user.email);
    printf("Enter password: ");
    scanf("%s", user.password);
    user.balance = 0.0;
    addUser(user);
    printf("Registration successful!\n");
}

void handleProfessorRegistration()
{
    // Implémente l'inscription des professeurs
}

void handleCoursePurchase(int studentId, int courseId)
{
    User *student = findUserByEmail(studentId);
    Course *course = findCourseById(courseId);
    if (student && course && student->balance >= course->price)
    {
        student->balance -= course->price;
        // Ajouter la logique pour créditer le professeur et la plateforme
        printf("Course purchased successfully!\n");
    }
    else
    {
        printf("Purchase failed!\n");
    }
}

void handleCertificationAttempt(int studentId, int courseId, float score)
{
    Certification cert;
    cert.studentId = studentId;
    cert.courseId = courseId;
    cert.score = score;
    cert.isPassed = (score >= 70.0);
    addCertification(cert);
    printf("Certification attempt recorded!\n");
}
