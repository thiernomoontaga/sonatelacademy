<?php

function display_promo():void{
    if(is_connect()){
        render_view('promotion');
    }
    else{
        render_view('login');
    }
}


