<?php
    function is_connect():bool{

    if(session_status() === PHP_SESSION_NONE){
        session_start();
    }
    return (!empty($_SESSION['users']));
   }

   function redirect_to_page():void{
    if(!is_connect()){
        header('location:/login.php');
        exit();
    }
 }
