<?php

$clients = [];
$generateur_matricule = rand();
$indiceNum = ["78","77","76","70"];


$ajouter_client = function(string $nom, string $prenom, string $matricule = NULL, array $listNumerotelephone = NULL) use(&$clients,$generateur_matricule):bool{
   if (empty($clients))
   {
    $matricule = $generateur_matricule;
    $clients[] = [$matricule,$nom,$prenom,$listNumerotelephone];
    return true;
   }
   else 
   {  
        $matricule = $generateur_matricule;
        foreach($clients as $value)
        if($matricule !== $value[0]){
            $clients[] = [$matricule,$nom,$prenom,$listNumerotelephone];
        }
        return true;
       
   }
};

$validerNumero = function(string $numerotelephone) use($indiceNum):bool{
    if(count(trim($numerotelephone) ) == 9){
        foreach($indiceNum as $i){
            return (substr($numerotelephone,0,2) == $i) ? true : false ;
        }
        return true;
    }
};

$ajouterNumerotelephone = function($numeroTelephone) use($validerNumero,&$clients):bool{
    if($validerNumero($numeroTelephone)){
        $clients[3] = $numeroTelephone;
        return true;
    }
};




