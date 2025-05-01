<?php 
require_once __DIR__.'/../controllers/test_login.controller.php';
require_once __DIR__.'/../models/test_login.model.php';
require_once __DIR__.'/../models/reset_password.model.php';
function reset_password():void{
        if(!empty($_POST['reset_password']) && !empty($_POST['confirm_reset_password'])){
            if($_POST['reset_password'] === $_POST['confirm_reset_password']){
               global $reset_password;
               if($reset_password($_SESSION['login'],$_POST['reset_password'])){
                    $_SESSION['success'] = "mot de passe reinitialiser avec succes ! ";
                    redirect_to_root('login');
               }
               else{
                $_SESSION['fail'] = "mot de pass  valide ! ";
                redirect_to_root('reset');
               }
            }
            
        }
        require_once __DIR__.'/../views/reset.php';
}







 