<?php require_once __DIR__.'/../models/test_login.model.php';

function change_password(string $login):void{
    global $is_in;
    if($is_in($login)){
        redirect_to_root('reset');
    }
    else{
        $_SESSION['erreur'] = 'login n\'est pas valide ! ';
        redirect_to_root('verify_login');
    }
}






