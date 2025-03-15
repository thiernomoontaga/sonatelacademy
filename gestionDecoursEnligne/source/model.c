#include "model.h"

User users[MAX_USERS];
Course courses[MAX_COURSES];
Certification certifications[MAX_CERTIFICATIONS];

int userCount = 0;
int courseCount = 0;
int certificationCount = 0;

void loadData()
{
    // Implémente le chargement des données depuis un fichier binaire
}

void saveData()
{
    // Implémente la sauvegarde des données dans un fichier binaire
}

void addUser(User user)
{
    if (userCount < MAX_USERS)
    {
        users[userCount++] = user;
    }
}

User *findUserByEmail(const char *email)
{
    for (int i = 0; i < userCount; i++)
    {
        if (strcmp(users[i].email, email) == 0)
        {
            return &users[i];
        }
    }
    return NULL;
}

void addCourse(Course course)
{
    if (courseCount < MAX_COURSES)
    {
        courses[courseCount++] = course;
    }
}

Course *findCourseById(int id)
{
    for (int i = 0; i < courseCount; i++)
    {
        if (courses[i].id == id)
        {
            return &courses[i];
        }
    }
    return NULL;
}

void addCertification(Certification certification)
{
    if (certificationCount < MAX_CERTIFICATIONS)
    {
        certifications[certificationCount++] = certification;
    }
}

Certification *findCertificationByStudentAndCourse(int studentId, int courseId)
{
    for (int i = 0; i < certificationCount; i++)
    {
        if (certifications[i].studentId == studentId && certifications[i].courseId == courseId)
        {
            return &certifications[i];
        }
    }
    return NULL;
}