#include "../header/controller.h"
#include "constant.h"
#include <stdio.h>

void gererUtilisateurs(Utilisateur *users, int *nbUsers)
{
    int choix;
    afficherUtilisateurs(users, *nbUsers);
    printf("\t 1. Modifier un utilisateur.\n");
    printf("\t 2. Supprimer un utilisateur.\n");
    printf("Donner votre choix : ");
    scanf("%d", &choix);
    if (choix == 1)
    {
        int idUtilisateur;
        printf("ID de l'utilisateur à modifier : ");
        scanf("%d", &idUtilisateur);
        modifierUtilisateur(users, *nbUsers, idUtilisateur);
    }
    else if (choix == 2)
    {
        int idUtilisateur;
        printf("ID de l'utilisateur à supprimer : ");
        scanf("%d", &idUtilisateur);
        supprimerUtilisateur(users, nbUsers, idUtilisateur);
    }
}

void inscrireCours(Utilisateur *Tab, int index, Cours *cours, int nbCours, Certification *certifications, int *nbCertifications)
{
    int idCours;
    printf("ID du cours à inscrire : ");
    scanf("%d", &idCours);
    int indexCours = trouverCoursParId(cours, nbCours, idCours);
    if (indexCours != -1)
    {
        if (Tab[index].solde >= cours[indexCours].prix)
        {
            Tab[index].solde -= cours[indexCours].prix;
            cours[indexCours].nombre_inscrits++;
            Certification nouvelleCertification;
            nouvelleCertification.id = *nbCertifications + 1;
            nouvelleCertification.id_cours = idCours;
            nouvelleCertification.id_etudiant = Tab[index].id;
            nouvelleCertification.note = 0.0;
            nouvelleCertification.valide = 0;
            certifications[*nbCertifications] = nouvelleCertification;
            (*nbCertifications)++;
            printf("Inscription réussie !\n");
        }
        else
        {
            printf("Solde insuffisant.\n");
        }
    }
    else
    {
        printf("Cours non trouvé.\n");
    }
}
