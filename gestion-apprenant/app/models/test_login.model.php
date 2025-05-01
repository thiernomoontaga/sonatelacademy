<?php
require_once __DIR__.'/../models/model.php';

$is_in = function(string $login):bool{
    global $json_to_array;
    $data = $json_to_array();
    $users = $data['users'];
    foreach($users as $user){
        if(($user['login']) === $login){
             $_SESSION['login'] = $user['login'];
            return true;
        }
    }
    return false;
};

