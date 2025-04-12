<?php

$MENUGENERALE = [
    "======================================== GESTIONS DE RESERVATIONS =========================================\n",
    "1-Se Connecter \n",
    "2-S'inscrire \n "
];
$MENUGESTIONNAIRE = [

    "1-Se Connecter\n",
    "2-Ajouter  un Proprietaire  dans une Liste\n",
    "3-Lister les propriétaires\n",
    "4-Ajouter un nouveau bien à un Proprietaire\n",
    "5-Afficher la liste  des Biens d'un Proprietaire\n",
    "6-Lister  les Biens\n",
    "7-Lister les Réservations \n",
    "8-Valider une Réservations faites sur un Bien\n",
    "9-Enregistrer le Paiement d'une Réservation \n",
    "10-Archiver/Activer un Bien\n",
    "11-Créer un compte Client\n",
    "12-Quitter\n"
];

$SOUSMENUGESTIONNAIRE = [

    "a-Filtrer par Type(Appartement/Maison/Studio)\n",
    "b-Filtrer Par Statut(Disponible/Reserver/Archiver)\n",
    "c-Filtrer par Proprietaire\n"
];


$MENUCLIENT = [
    "1-Se connecter\n",
    "2-Lister  les Biens Disponible\n",
    "3-Faire une Reservation sur un bien\n",
    "4-Lister ses Réservations \n",
    "5-Quitter "
];

$SOUSMENUCLIENT = [
    "a-Filtrer par Type(Appartement/Maison/Studio)\n",
    "a-Filtrer par Bien \n b-Filtrer Par Statut(Encours/Valider/Annuler/Payer)\n"
];

$choix = NULL;

$afficher_menu = function(array $MENU) use(&$choix):int{ 
     array_walk($MENU, function($value){echo "$value";});
     $choix = (int)readline("donner votre choix : \n");
     return $choix ; 
};

$info_user [] = NULL;

$creer_compte = function() use(&$info_user): array{

    $nom = readline("saissez votre nom : ");
    $prenom = readline("saissez votre prenom :");
    $login = readline("saisissez votre login : ");
    $mp = readline("saisissez votre mot de passe : ");
    $info_user[] = [$nom,$prenom,$login,$mp];
    return $info_user;
};

$lister_biens;

$liste_reservation;


