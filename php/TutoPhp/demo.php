<?php

/*$note = NULL;
$notes = [];
while($note !== 'fin')
{
   $note = readline(" veuillez donnez une note ou taper 'fin' pour terminer la saisi :  ");
     if ($note !== 'fin'){
      $notes[] = $note;
     }
   

}

foreach($notes as $note) {
   echo "$note\n";
}
*/

/*$notes = [];
while(true) {
   $note = readline("veuillez donner des notes ou taper 'fin' pour arreter la saisi : "); 
   if ($note === 'fin'){
      break;
   }
   else 
   {
       $notes[] = $note;

   }
}

foreach ($notes as $note){
   echo "$note\n";
}
*/


$creneaux = [];

while(true) {
   $ouverture = (int)readline("veuillez saisir l'horaire d'ouverture : ");
   $fermeture = (int)readline("veuillez saisir l'horaire de fermeture : "); 
   if($ouverture >= $fermeture){
      echo "les horaires que vous avez renseigner ne sont pas valide ! ";
   }
   else{
      $creneaux[] = [$ouverture,$fermeture];
      $action = readline("tu veux renseigner un autre creneaux horaire (o/n) : ");
      if($action === 'n') {
         break;
      }

   }
} 

foreach ($creneaux as $creneau){
   echo "le magasin est s'ouvre a $creneau[0] et ferme a $creneau[1]\n";
}
/*$heureUtilisateur = (int)readline("veuillez saisir une heure pour visiter le magasin : ");
$trouver = false;
foreach($creneaux as $creneau)
{
   if (($heureUtilisateur >= $creneau[0]) && ($heureUtilisateur <= $creneau[1] )){
      $trouver = true;
      break;
   }
}

if($trouver) {
   echo "le magasin sera ouvert ";
}
else {
   echo "le magasin sea fermer";
}
*/