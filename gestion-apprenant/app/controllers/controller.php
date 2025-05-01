<?php
require_once __DIR__.'/../services/session.service.php';

function redirect_to_root($page):void{
    header("location: index.php?page=$page");
    exit();
}

function render_view(string $view):void{
    ob_start();
    require dirname(__DIR__)."/views/$view.php";
    $content = ob_get_clean();
    require_once dirname(__DIR__)."/views/layout/base.layout.php";
}



