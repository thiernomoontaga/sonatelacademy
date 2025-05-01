<?php
   require_once __DIR__.'/../controllers/controller.php';
   function display_dashbord():void{
      if(isset($_SESSION['user'])){
         render_view('dashbord');
      }
      else{
         redirect_to_root('login');
      }
   }

