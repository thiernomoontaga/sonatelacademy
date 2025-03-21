#include "../header/view.h"
#include "../header/constant.h"
#include <stdio.h>

int menu()
{
    int choix = 0;
    do
    {
        printf("1. Connexion.\n");
        printf("2. Inscription.\n");
        printf("3. Quitter.\n");
        printf("Donner votre choix : ");
        scanf("%d", &choix);
    } while (choix != 1 && choix != 2 && choix != 3);
    return choix;
}

void afficherTableauDeBord(Utilisateur *Tab, int index, Cours *cours, int nbCours, Certification *certifications, int nbCertifications)
{
    int choix;
    float montant;
    Utilisateur utilisateur = Tab[index];

    do
    {
        printf("\n****** Tableau de Bord ******\n");
        printf("Nom : %s %s\n", utilisateur.prenom, utilisateur.nom);
        printf("Solde : %.2f\n", utilisateur.solde);

        switch (utilisateur.role)
        {
        case 0:
            printf("Rôle : Étudiant\n");
            printf("\t 1. Acheter du crédit.\n");
            printf("\t 2. Voir mes certifications.\n");
            printf("\t 3. Passer une Certification.\n");
            printf("\t 4. Inscrire dans un cours.\n");
            printf("\t 5. Voir les cours inscrits.\n");
            printf("\t 6. Retour au menu principal.\n");
            printf("Donner votre choix : ");
            scanf("%d", &choix);
            if (choix == 1)
            {
                printf("Entrer un montant : ");
                scanf("%f", &montant);
                Tab[index] = acheterCredit(utilisateur, montant);
            }
            else if (choix == 2)
            {
                afficherMesCertifications(certifications, nbCertifications, utilisateur.id);
            }
            else if (choix == 3)
            {
                validerCertification(Tab, index, certifications, nbCertifications);
            }
            else if (choix == 4)
            {
                inscrireCours(Tab, index, cours, nbCours, certifications, &nbCertifications);
            }
            else if (choix == 5)
            {
                afficherCoursInscrits(cours, nbCours, certifications, nbCertifications, utilisateur.id);
            }
            else if (choix == 6)
            {
                printf("Retour au menu principal.\n");
            }
            else
            {
                printf("Choix invalide. Veuillez réessayer.\n");
            }
            break;
        case 1:
            printf("Rôle : Professeur\n");
            printf("\t 1. Créer un cours.\n");
            printf("\t 2. Créer une certification.\n");
            printf("\t 3. Voir mes cours.\n");
            printf("\t 4. Retour au menu principal.\n");
            printf("Donner votre choix : ");
            scanf("%d", &choix);
            if (choix == 1)
            {
                creerCours(Tab, index, cours, &nbCours);
            }
            else if (choix == 2)
            {
                creerCertification(Tab, index, certifications, &nbCertifications);
            }
            else if (choix == 3)
            {
                afficherMesCours(cours, nbCours, utilisateur.id);
            }
            else if (choix == 4)
            {
                printf("Retour au menu principal.\n");
            }
            else
            {
                printf("Choix invalide. Veuillez réessayer.\n");
            }
            break;
        case 2:
            printf("Rôle : Administrateur\n");
            printf("\t 1. Gérer les utilisateurs.\n");
            printf("\t 2. Gérer les cours.\n");
            printf("\t 3. Gérer les certifications.\n");
            printf("\t 4. Retour au menu principal.\n");
            printf("Donner votre choix : ");
            scanf("%d", &choix);
            if (choix == 1)
            {
                gererUtilisateurs(Tab, nbUtilisateurs);
            }
            else if (choix == 2)
            {
                afficherCours(cours, nbCours);
                printf("\t a. Modifier un cours.\n");
                printf("\t b. Supprimer un cours.\n");
                printf("\t c. Retour au tableau de bord.\n");
                printf("Donner votre choix : ");
                char choixCours;
                scanf(" %c", &choixCours);
                if (choixCours == 'a')
                {
                    int idCours;
                    printf("ID du cours à modifier : ");
                    scanf("%d", &idCours);
                    modifierCours(cours, nbCours, idCours);
                }
                else if (choixCours == 'b')
                {
                    int idCours;
                    printf("ID du cours à supprimer : ");
                    scanf("%d", &idCours);
                    supprimerCours(cours, &nbCours, idCours);
                }
                else if (choixCours == 'c')
                {
                    printf("Retour au tableau de bord.\n");
                }
                else
                {
                    printf("Choix invalide. Veuillez réessayer.\n");
                }
            }
            else if (choix == 3)
            {
                afficherCertifications(certifications, nbCertifications);
                printf("\t a. Modifier une certification.\n");
                printf("\t b. Supprimer une certification.\n");
                printf("\t c. Retour au tableau de bord.\n");
                printf("Donner votre choix : ");
                char choixCertif;
                scanf(" %c", &choixCertif);
                if (choixCertif == 'a')
                {
                    int idCertif;
                    printf("ID de la certification à modifier : ");
                    scanf("%d", &idCertif);
                    modifierCertification(certifications, nbCertifications, idCertif);
                }
                else if (choixCertif == 'b')
                {
                    int idCertif;
                    printf("ID de la certification à supprimer : ");
                    scanf("%d", &idCertif);
                    supprimerCertification(certifications, &nbCertifications, idCertif);
                }
                else if (choixCertif == 'c')
                {
                    printf("Retour au tableau de bord.\n");
                }
                else
                {
                    printf("Choix invalide. Veuillez réessayer.\n");
                }
            }
            else if (choix == 4)
            {
                printf("Retour au menu principal.\n");
            }
            else
            {
                printf("Choix invalide. Veuillez réessayer.\n");
            }
            break;
        default:
            printf("Rôle inconnu\n");
            break;
        }
        printf("****************************\n");
    } while (choix != 4 && choix != 6);
}

void afficherCours(Cours *cours, int nbCours)
{
    printf("\nListe des cours :\n");
    for (int i = 0; i < nbCours; i++)
    {
        printf("ID : %d, Titre : %s, Prix : %.2f\n", cours[i].id, cours[i].titre, cours[i].prix);
    }
}
