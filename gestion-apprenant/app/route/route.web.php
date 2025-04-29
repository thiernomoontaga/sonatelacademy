<?php
require_once __DIR__.'/../controllers/controller.php';
require_once __DIR__.'/../controllers/authentification.controller.php';
require_once __DIR__.'/../controllers/dashbord.controller.php';

$page = $_GET['page'] ?? 'login';

match($page){
   'login' => authenticate_users(),
   'dashbord' => display_dashbord(),
   default => redirect_to_root('login')
};


