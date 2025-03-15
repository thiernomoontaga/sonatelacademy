#ifndef CONTROLLER_H
#define CONTROLLER_H

#include "constant.h"

void handleStudentLogin();
void handleProfessorLogin();
void handleAdminLogin();

void handleStudentRegistration();
void handleProfessorRegistration();

void handleCoursePurchase(int studentId, int courseId);
void handleCertificationAttempt(int studentId, int courseId, float score);

#endif // CONTROLLER_H
