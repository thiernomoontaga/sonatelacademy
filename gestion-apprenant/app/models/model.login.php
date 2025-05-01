<?php require_once __DIR__.'/../models/model.php';

$check_user = function(string $login,string $password):bool{
    global $json_to_array;
    $data = $json_to_array();
    $users = $data['users'];
    foreach($users as $user){
        if($user['login'] === $login && $user['password'] === $password){
            return true;
        }
    }
    return false;
};




