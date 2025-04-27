<?php
require_once __DIR__.'/../views/login.php';
require_once __DIR__.'/../controllers/controller.php';

$erreur = NULL;
if((!empty($_POST['login'])) && (!empty($_POST['password']))){
    if(($_POST['login'] === 'thierno') && $_POST['password'] == '123'){
        session_start();
        $_SESSION['users'] = 1;
        header('location:/dashbord.php');
    }
    else {
        $erreur = "identifiant non verifier";
    }
}



 











 




