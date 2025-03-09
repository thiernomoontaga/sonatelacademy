#ifndef MODEL_H
#define MODEL_H

typedef struct
{
    int id;
    char nom[50];
    char email[50]

} utilisateurs;

typedef struct
{
    utilisateurs U;
    float credit;
} Etudiant;

typedef struct
{
    utilisateurs U;
    float solde;
} Professeur;
typedef struct
{
    utilisateurs U;
} Admin;

typedef struct
{
    int id;
    char titre[100];
    int professeur_id;
    float prix;
    sessions S;
} Cours;

typedef struct
{
    int jjd;
    int mmd;
    int aad;
    int jjf;
    int mmf;
    int aaf;
} sessions;

#endif
