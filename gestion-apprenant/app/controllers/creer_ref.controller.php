<?php
require_once __DIR__.'/../controllers/controller.php';
require_once __DIR__.'/../services/session.service.php';
function display_form_creer_ref():void{
    if(is_connect()){
        render_view('creer_ref');
    }
    else{
        redirect_to_root('login');
    }
}

