#ifndef MODEL_H
#define MODEL_H
#include "constant.h"
typedef struct
{
    int id;
    char nom[50];
    char prenom[50];
    char email[100];
    char mot_de_passe[50];
    float solde;
    int role;
} Utilisateur;

typedef struct
{
    int id;
    char titre[100];
    char description[255];
    int id_professeur;
    float prix;
    int nombre_inscrits;
} Cours;

typedef struct
{
    int id;
    int id_cours;
    int id_etudiant;
    float note;
    int valide;
} Certification;

int chargerUtilisateurs(Utilisateur *utilisateurs, int *nbUtilisateurs);
int chargerCours(Cours *cours, int *nbCours);
int chargerCertifications(Certification *certifications, int *nbCertifications);
int sauvegarderUtilisateurs(Utilisateur *utilisateurs, int nbUtilisateurs);
int sauvegarderCours(Cours *cours, int nbCours);
int sauvegarderCertifications(Certification *certifications, int nbCertifications);
int trouverUtilisateurParId(Utilisateur *Tab, int nbUtilisateurs, int id);
#endif
