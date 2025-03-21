#include <stdio.h>
#include "../header/constant.h"
#include "../header/controller.h"
#include "../header/model.h"
#include "../header/view.h"

int main()
{
    Utilisateur Tab[MAX_USERS];
    int nbUtilisateurs = 0;
    Cours cours[MAX_COURS];
    int nbCours = 0;
    Certification certifications[MAX_CERTIFICATIONS];
    int nbCertifications = 0;
    Utilisateur utilisateurConnecte;

    chargerUtilisateurs(Tab, &nbUtilisateurs);
    chargerCours(cours, &nbCours);
    chargerCertifications(certifications, &nbCertifications);
    
    int m;
    do
    {
        m = menu();
        switch (m)
        {
        case 1:
            if (connexionUtilisateur(Tab, nbUtilisateurs, &utilisateurConnecte))
            {
                int index = trouverUtilisateurParId(Tab, nbUtilisateurs, utilisateurConnecte.id);
                if (index != -1)
                {
                    afficherTableauDeBord(Tab, index, cours, nbCours, certifications, nbCertifications);
                }
            }
            break;
        case 2:
            nbUtilisateurs = inscriptionUtilisateur(Tab, nbUtilisateurs);
            break;
        case 3:
            printf("\n\nAu revoir !!!\n\n");
            break;
        default:
            printf("Choix invalide. Veuillez réessayer.\n");
            break;
        }
    } while (m != 3);

    sauvegarderUtilisateurs(Tab, nbUtilisateurs);
    sauvegarderCours(cours, nbCours);
    sauvegarderCertifications(certifications, nbCertifications);

    return 0;
}
