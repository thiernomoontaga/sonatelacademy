#include "view.h"

void displayMainMenu()
{
    printf("1. Student Login\n");
    printf("2. Professor Login\n");
    printf("3. Admin Login\n");
    printf("4. Exit\n");
}

void displayStudentMenu()
{
    printf("1. Buy Course\n");
    printf("2. Take Certification\n");
    printf("3. View Certifications\n");
    printf("4. Logout\n");
}

void displayProfessorMenu()
{
    printf("1. Create Course\n");
    printf("2. View Balance\n");
    printf("3. Logout\n");
}

void displayAdminMenu()
{
    printf("1. Manage Users\n");
    printf("2. Logout\n");
}

void displayCourses()
{
    for (int i = 0; i < courseCount; i++)
    {
        printf("%d. %s (Price: %.2f)\n", courses[i].id, courses[i].title, courses[i].price);
    }
}

void displayCertifications(int studentId)
{
    for (int i = 0; i < certificationCount; i++)
    {
        if (certifications[i].studentId == studentId)
        {
            Course *course = findCourseById(certifications[i].courseId);
            printf("Course: %s, Score: %.2f, Passed: %s\n", course->title, certifications[i].score, certifications[i].isPassed ? "Yes" : "No");
        }
    }
}