<?php

$affichageMenu = function(array $Menu):int{
    foreach($Menu as $value){
        echo $value;
    }
    return (int)readline("donner votre choix : ");
};


$lister_clients = function() use(&$clients):void{
    foreach($clients as $info_client){
        foreach($info_client as $info){
            if (!(is_array($info))){
                 echo $info."\n";  

            }
            
            else{
                   foreach($info as $value){
                    echo $value."\n";
                  }
            }
        }
    }
};

$filtrage = function() use($clients):void{
      foreach($clients as $value){
         if (!(is_array($value))){
            $filtrageclient = $value;
            echo $filtrageclient;
         }
         else{
            $filtragenumero = $value;
            echo $filtragenumero;
         }
     }
};




