<?php

enum validateur : string{
    case valider_proprietaire = " est_valide";
}

//$validators = [
    validateur::value valider_proprietaire->value => function( array $utilisateurs):bool{array_walk($utilisateurs,function($value))};
//];
