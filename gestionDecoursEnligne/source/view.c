#include "view.h"
#include <stdio.h>

void afficherMenuPrincipal() {
    printf("1. Connexion\n");
    printf("2. Inscription\n");
    printf("3. Quitter\n");
}

void afficherMenuEtudiant() {
    printf("1. Acheter des crédits\n");
    printf("2. S'inscrire à un cours\n");
    printf("3. Passer une certification\n");
    printf("4. Voir mes certifications\n");
    printf("5. Déconnexion\n");
}
void afficherMenuProfeseur(){
    printf("1.creer un cours\n");
    printf("2.voir son solde\n");
    printf("3.creer une certification\n");
    printf("4.Deconnexion\n");
}

void afficherMenuAdmin() {
    printf("1. Gérer les utilisateurs\n");
    printf("2. Approuver des cours\n");
    printf("3. Générer un rapport de certifications\n");
    printf("4. Quitter\n");
}
