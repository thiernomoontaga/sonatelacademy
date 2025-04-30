<?php
    require_once __DIR__.'/../enum/all_enums.php';
    require_once __DIR__.'/../translate/fr/error.fr.php';
    require_once __DIR__.'/../models/model.php';

    use Enum\session;
    use Enum\champ;
    use Enum\path;
    use Enum\model_auth;
    use Enum\EnumerationData;
    use Enum\Validateur_Connexion;
    use Enum\errors_message;

    $validators = [
        Validateur_Connexion::CHAMP_VIDE->value => function(string $champs)use(&$errors):string|bool{

            return empty($champs) ? $errors[errors_message::CHAMP_VIDE->value] : false;

        },

        Validateur_Connexion::CHAMP_PASSWORD->value => function(string $pass)use(&$errors):string|bool{

            return empty($pass) ? $errors[errors_message::CHAMP_VIDE->value] : false;

        },
    ];