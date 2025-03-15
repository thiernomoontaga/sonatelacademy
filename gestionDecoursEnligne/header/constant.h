#ifndef CONSTANT_H
#define CONSTANT_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_USERS 100
#define MAX_COURSES 50
#define MAX_CERTIFICATIONS 100

typedef struct {
    int id;
    char name[50];
    char email[50];
    char password[50];
    float balance;
} User;

typedef struct {
    int id;
    char title[100];
    int professorId;
    float price;
    int isCertified;
} Course;

typedef struct {
    int id;
    int studentId;
    int courseId;
    float score;
    int isPassed;
} Certification;

extern User users[MAX_USERS];
extern Course courses[MAX_COURSES];
extern Certification certifications[MAX_CERTIFICATIONS];

extern int userCount;
extern int courseCount;
extern int certificationCount;

#endif // CONSTANT_H