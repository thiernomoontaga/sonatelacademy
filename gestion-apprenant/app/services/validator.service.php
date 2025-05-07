<?php

$is_valide_date = function(string $date):bool{
     if (preg_match("/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/}", $date)){
        [$month,$day,$year] = explode('/',$date);
        return checkdate(int($month),int($day),$year);
     }
     return false;
};

$is_valide_name = function(string $name):bool{
    return preg_match('/^[a-zA-ZÀ-ÿ0-9\s\'\-]{2,50}$/u', trim($name));
};

$is_valide_file = function(array $file):bool{
    
};

// logique 

// je recupere la variable $file qui es un tableau 
// je recupere les valeurs super variable $FILES 

// ex: $file = $fFILES['images];

//$file['name']

