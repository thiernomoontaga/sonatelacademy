<?php
require_once __DIR__.'/../controllers/all_controller.php';

$page = $_GET['page'] ?? 'login';

$action = match($page){
   'login' => fn() => authenticate_users(),
   'dashbord' => fn() => display_dashbord(),
   'verify_login' => fn() => forget_password(),
   'test_login' => fn() => change_password($_POST['login']),
   'logout' => fn() =>logout(),
   'reset'  => fn() => reset_password(),
   'promo' => fn() => display_promo(),
   'liste_promo' => fn() => display_list_promo(),
   'ajout_promo'=> fn() => display_form_ajout_promo(),
   'ajout_referentiel' => fn() => ajout_referentiel(),
   'tout_ref' => fn() => display_tout_ref(),
   'creer_ref' => fn() => display_form_creer_ref(),
   'referentiel' => fn() => display_page_referentiel(),
   default => fn() => redirect_to_root('login')
};

$action();



