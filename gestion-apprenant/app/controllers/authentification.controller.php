<?php
require_once __DIR__.'/../services/session.service.php';
require_once __DIR__.'/../models/model.login.php';
require_once __DIR__.'/../controllers/controller.php';
function authenticate_users():void{
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        if(!empty($_POST['login']) && !empty($_POST['password'])){
            global $check_user;
            if($check_user($_POST['login'],$_POST['password'])){
                $_SESSION['user'] = 1;
                redirect_to_root('dashbord');
            }
        }
        else{
            $_SESSION['error'] = "login ou mot de pass pas valide ! ";
            redirect_to_root('login');
        }
    }
    require_once __DIR__.'/../views/login.php';
}



















 












 











 




