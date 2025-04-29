<?php
require_once __DIR__.'/../controllers/controller.php';
function authenticate_users():void{
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        if(!empty($_POST['login']) && !empty($_POST['password'])){
            if(check_id($_POST['login'],$_POST['password'])){
                $_SESSION['user'] = true;
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
function check_id(string $login,string $password):bool{
    return $login ==='thierno' && $password ==='123';
}


















 












 











 




