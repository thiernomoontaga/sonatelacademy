#include "controller.h"
#include "model.h"
#include <constant.h>

int inscrireEtudiant(Etudiant *etudiants, int *count, Etudiant nouvelEtudiant) {
    if (*count < MAX_USERS) {
        etudiants[*count] = nouvelEtudiant;
        (*count)++;
        return 1;
    }
    return 0;
}

int connecterEtudiant(Etudiant *etudiants, int count, char *email, char *nom) {
    for (int i = 0; i < count; i++) {
        if (strcmp(etudiants[i].email, email) == 0 && strcmp(etudiants[i].nom, nom) == 0) {
            return 1;
        }
    }
    return 0;
}