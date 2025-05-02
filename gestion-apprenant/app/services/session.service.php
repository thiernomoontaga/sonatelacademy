<?php 

function is_connect():bool{
    if(session_status ()=== PHP_SESSION_NONE){
        session_start();
    }
    return !empty($_SESSION['user']);
}

is_connect();

