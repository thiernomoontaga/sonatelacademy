#include "model.h"
#include <stdio.h>
#include <constant.h>

void sauvegarderEtudiants(Etudiant *etudiants, int count) {
    FILE *file = fopen("etudiants.dat", "wb");
    if (file) {
        fwrite(etudiants, sizeof(Etudiant), count, file);
        fclose(file);
    }
}

void chargerEtudiants(Etudiant *etudiants, int *count) {
    FILE *file = fopen("etudiants.dat", "rb");
    if (file) {
        *count = fread(etudiants, sizeof(Etudiant), MAX_USERS, file);
        fclose(file);
    }
}