<?php

    
    require_once __DIR__.'/controller.php';
    require_once __DIR__.'/../models/model.php';
    require_once __DIR__.'/../models/model_auth.php';
    require_once __DIR__.'/../enum/all_enums.php';
    require_once __DIR__.'/../services/session.service.php';


    use Enum\session;
    use Enum\champ;
    use Enum\path;
    use Enum\model_auth;
    use Enum\EnumerationData;
    use function  Service\Session\getAllSession;



    function handle_request():void{

        $sessions = getAllSession();
        $action =  $sessions[session::REQUEST->value]('action') ?? 'dashboard';
        $user = $sessions[ session::GET_SESSION->value]('user');

        match ($action) {
            'dashboard' => render_view('dashboard',['user' => $user],'base'),
            'promotion' => render_view('list_promo',['user'=> $user ], 'base'),
            'référentiels'=> render_view('accueil_referentiel',['user'=> $user ], 'base'),

             default => '',
        };
  }


    handle_request();
    
