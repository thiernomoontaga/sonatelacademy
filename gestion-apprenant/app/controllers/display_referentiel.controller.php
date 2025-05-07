<?php
require_once __DIR__.'/../controllers/display_referentiel.controller.php';

function display_page_referentiel():void{
      if(is_connect()){
        render_view('referentiel');
    }
    else
    {
        render_view('login');
    }
}