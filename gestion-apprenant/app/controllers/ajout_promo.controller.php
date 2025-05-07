<?php
require_once __DIR__.'/../controllers/controller.php';
require_once __DIR__.'/../services/session.service.php';
function display_form_ajout_promo():void{
    if(is_connect()){
        render_view('ajout_promo');
        
    }
    else{
        redirect_to_root('login');
    }
}


function ajouter_promo($promo):void{
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        
    }
}