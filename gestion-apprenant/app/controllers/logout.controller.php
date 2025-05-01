<?php

require_once __DIR__.'/../services/session.service.php';

function logout():void{
    if(is_connect()){
        unset($_SESSION['user']);
        $_SESSION['message'] = 'vous avez ete deconnecter avec succes !';
        redirect_to_root('login');
    }
}

