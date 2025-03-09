#include <stdio.h>
#include "model.h"
#include "controller.h"
#include "view.h"
#include <constant.h>

int main() {
    Etudiant etudiants[MAX_USERS];
    int count = 0;
    chargerEtudiants(etudiants, &count);

    int choix;
    do {
        afficherMenuPrincipal();
        scanf("%d", &choix);

        switch (choix) {
            case 1: {
                char email[50], nom[50];
                printf("Email: ");
                scanf("%s", email);
                printf("Nom: ");
                scanf("%s", nom);

                if (connecterEtudiant(etudiants, count, email, nom)) {
                    printf("Connexion réussie!\n");
                    afficherMenuEtudiant();
                } else {
                    printf("Échec de la connexion.\n");
                }
                break;
            }
            case 2: {
                Etudiant nouvelEtudiant;
                printf("Nom: ");
                scanf("%s", nouvelEtudiant.nom);
                printf("Email: ");
                scanf("%s", nouvelEtudiant.email);
                nouvelEtudiant.credit = 0;

                if (inscrireEtudiant(etudiants, &count, nouvelEtudiant)) {
                    printf("Inscription réussie!\n");
                } else {
                    printf("Échec de l'inscription.\n");
                }
                break;
            }
            case 3:
                printf("Au revoir!\n");
                break;
            default:
                printf("Choix invalide.\n");
        }
    } while (choix != 3);

    sauvegarderEtudiants(etudiants, count);
    return 0;
}