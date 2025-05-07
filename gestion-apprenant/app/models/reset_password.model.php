<?php
require_once __DIR__.'/../models/model.php';
require_once __DIR__.'/../models/test_login.model.php';
$reset_password = function(string $login,string $password){
    global $json_to_array,$array_to_json,$is_in;
    if($is_in($login)){
        $data = $json_to_array();
            foreach($data['users'] as &$user){
                if($user['login']  === $login){
                $user['password'] = $password;
                }
        }

        $array_to_json($data);
    }
    return true;
};











