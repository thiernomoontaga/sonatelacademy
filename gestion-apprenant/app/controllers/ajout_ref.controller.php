<?php
require_once __DIR__.'/../controllers/controller.php';
require_once __DIR__.'/../services/session.service.php';
function ajout_referentiel():void{
    if(is_connect()){
        render_view('ajout_referentiel');
    }
    else{
        redirect_to_root('login');
    }
}

