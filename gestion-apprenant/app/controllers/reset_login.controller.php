<?php 
require_once __DIR__.'/../controllers/test_login.controller.php';
require_once __DIR__.'/../models/test_login.model.php';
function reset_password():void{
        global $is_in;
        if(isset($_SESSION['login']) && isset($_POST['reset_password']) && isset($_POST['confirm_reset_password'])){
           
            if($_POST['reset_password'] === $_POST['confirm_reset_password']){
               $_SESSION['succes'] = "mot reinitialiser avec succes ! ";
               redirect_to_root('login');
            }
            else
            {
                $_SESSION['fail'] = "mot de pass  valide ! ";
            }
        }
        require_once __DIR__.'/../views/reset.php';
}








 