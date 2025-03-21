#include "../header/model.h"
#include "../header/constant.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int chargerUtilisateurs(Utilisateur *utilisateurs, int *nbUtilisateurs)
{
    FILE *fichier = fopen("utilisateurs.bin", "rb");
    if (fichier == NULL)
        return 0;

    *nbUtilisateurs = 0;
    while (fread(&utilisateurs[*nbUtilisateurs], sizeof(Utilisateur), 1, fichier))
    {
        (*nbUtilisateurs)++;
    }
    fclose(fichier);
    return *nbUtilisateurs;
}

int sauvegarderUtilisateurs(Utilisateur *utilisateurs, int nbUtilisateurs)
{
    FILE *fichier = fopen("utilisateurs.bin", "wb");
    if (fichier == NULL)
        return 0;

    fwrite(utilisateurs, sizeof(Utilisateur), nbUtilisateurs, fichier);
    fclose(fichier);
    return 1;
}

int inscriptionUtilisateur(Utilisateur *Tab, int nbUtilisateurs)
{
    if (nbUtilisateurs >= MAX_USERS)
    {
        printf("\nNombre maximal d'utilisateurs atteint !\n");
        return nbUtilisateurs;
    }

    Utilisateur u;
    u.id = nbUtilisateurs + 1;

    printf("Nom : ");
    scanf("%s", u.nom);
    printf("Prénom : ");
    scanf("%s", u.prenom);
    printf("Email : ");
    scanf("%s", u.email);

    if (utilisateurExiste(Tab, nbUtilisateurs, u.email))
    {
        printf("\nUn utilisateur avec cet email existe déjà !\n");
        return nbUtilisateurs;
    }

    printf("Mot de passe : ");
    scanf("%s", u.mot_de_passe);
    printf("Rôle (0: étudiant, 1: professeur, 2: administrateur) : ");
    scanf("%d", &u.role);

    u.solde = 0.0;
    Tab[nbUtilisateurs] = u;
    nbUtilisateurs++;

    printf("\nInscription réussie !\n");
    return nbUtilisateurs;
}
