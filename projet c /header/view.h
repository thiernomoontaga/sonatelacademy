#ifndef VIEW_H
#define VIEW_H

#include "model.h"

int menu();
void afficherCours(Cours *cours, int nbCours);
void afficherCertifications(Certification *certifications, int nbCertifications);
void afficherTableauDeBord(Utilisateur *Tab, int index, Cours *cours, int nbCours, Certification *certifications, int nbCertifications, int *nbUtilisateurs);

#endif