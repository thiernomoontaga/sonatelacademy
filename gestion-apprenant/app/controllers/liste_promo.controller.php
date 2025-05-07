<?php
require_once __DIR__.'/../controllers/controller.php';
require_once __DIR__.'/../services/session.service.php';

function display_list_promo():void{
    if(is_connect()){
        render_view('liste_promo');
    }
    else
    {
        render_view('login');
    }
}

