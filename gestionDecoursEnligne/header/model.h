#ifndef MODEL_H
#define MODEL_H

typedef struct {
    int id;
    char nom[50];
    char email[50];
    float credit;
} Etudiant;

typedef struct {
    int id;
    char nom[50];
    char email[50];
    float solde;
} Professeur;

typedef struct {
    int id;
    char titre[100];
    int professeur_id;
    float prix;
} Cours;

void sauvegarderEtudiants(Etudiant *etudiants, int count);
void chargerEtudiants(Etudiant *etudiants, int *count);

#endif
