<?php
declare(strict_typpe = 1);

require "./services/reservation.service.php";
require "./views/reservation.view.php";

$afficher_menu($MENUGENERALE);

$menu = match($choix) {
    1 => $afficher_menu($MENUGESTIONNAIRE),
    2 => $creer_compte($info_user)
};

echo $menu;

var_dump($info_user);