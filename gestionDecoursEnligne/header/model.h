#ifndef MODEL_H
#define MODEL_H

#include "constant.h"

void loadData();
void saveData();

void addUser(User user);
User *findUserByEmail(const char *email);

void addCourse(Course course);
Course *findCourseById(int id);

void addCertification(Certification certification);
Certification *findCertificationByStudentAndCourse(int studentId, int courseId);

#endif // MODEL_H