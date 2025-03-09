#ifndef CONTROLLER_H
#define CONTROLLER_H

#include "model.h"

int inscrireEtudiant(Etudiant *etudiants, int *count, Etudiant nouvelEtudiant);
int connecterEtudiant(Etudiant *etudiants, int count, char *email, char *nom);

#endif