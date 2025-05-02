<?php
require_once __DIR__.'/../controllers/controller.php';
require_once __DIR__.'/../controllers/authentification.controller.php';
require_once __DIR__.'/../controllers/dashbord.controller.php';
require_once __DIR__.'/../controllers/verify_login.controller.php';
require_once __DIR__.'/../controllers/test_login.controller.php';
require_once __DIR__.'/../controllers/reset_login.controller.php';
require_once __DIR__.'/../controllers/logout.controller.php';
require_once __DIR__.'/../controllers/promotion.controller.php';

$page = $_GET['page'] ?? 'login';

$action = match($page){
   'login' => fn() => authenticate_users(),
   'dashbord' => fn() => display_dashbord(),
   'verify_login' => fn() => forget_password(),
   'test_login' => fn() => change_password($_POST['login']),
   'logout' => fn() =>logout(),
   'reset'  => fn() => reset_password(),
   'promo' => fn() => display_promo(),
   default => fn() => redirect_to_root('login')
};

$action();



