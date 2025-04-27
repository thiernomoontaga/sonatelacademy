<?php
   require_once __DIR__.'/../controllers/controller.php';
   $page = $_GET['page'] ?? 'login';

   $call_controller = [
    'login' => require_once __DIR__ .'/../controllers/authentification.controller.php',
   ];
   
   