#ifndef CONTROLLER_H
#define CONTROLLER_H

#include "model.h"
#include "view.h"

// Prototypes des fonctions de contrôle
void gererUtilisateurs(Utilisateur *users, int *nbUsers);
void inscrireCours(Utilisateur *Tab, int index, Cours *cours, int nbCours, Certification *certifications, int *nbCertifications);
void validerCertification(Utilisateur *Tab, int index, Certification *certif, int nbCertifications);

#endif