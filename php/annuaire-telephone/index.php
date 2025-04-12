<?php

require "./views/view.annuaire.php";
require "./services/service.annuaire.php";

$menu = [
        "1-Ajouter un Client"."\n",
        "2-Lister les  Clients"."\n",
        "3-Ajouter un numéro Téléphone a un client "."\n",
        "4-Lister tous les numeros Telephone"."\n",
        "5-Statitiques"."\n",
        "6-Quitter"."\n"
];

$sousmenu = [
    ["a-Filtrer les numéros Par Client","\nb-Filtrer Par Opérateur\n"],
    ["a-Le Client qui a le plus de numéros","\nb-L'opérateur qui a le plus de numéros\n"]
];



    do{
        $choix = $affichageMenu($menu);
        switch($choix){
        case 1 : echo "***************ajouter les informations************** : \n";
               $nom = readline("veuillez donner votre nom : ");
               $prenom = readline("veuillez donner votre prenom : ");
               $retour1 = $ajouter_client($nom,$prenom) ? "client enregistrer avec succes ! ":"ce client exite deja \n";
               echo $retour1."\n"; 
               break;
        case 2 : echo "***************** liste des clients ********************** \n";
               $lister_clients();
               break;
        case 3 : do{
                     $numerotelephone = readline("ajouter votre numero de telephone : ou taper quit pour arreter ): ");
                     $retour2 =  $ajouterNumerotelephone($numerotelephone) ? "numero ajouter ! " : "Numero pas valide !";
                   }while($numerotelephone != 'quit');
        case 4 : 
               $choix = $affichageMenu($sousmenu[0]);
               if($choix == 'a'){
                    $filtrage();
                    
               }
               elseif($choix == 'b'){
                    
               }
               break;
        case 5:
               $choix = $affichageMenu($sousmenu[1]);
               if($choix == 'a'){

               }
               elseif($choix == 'b'){


               }
               default : echo "choix invalide ! ";
         }

    } while($choix != 6);
    