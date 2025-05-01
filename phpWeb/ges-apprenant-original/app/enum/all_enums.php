<?php

    namespace Enum;

    enum EnumerationData: string {

      case JSON_TO_ARRAY = 'json_to_array';
      case ARRAY_TO_JSON =  'array_to_json';
      case GET_ALL_BY_KEY = 'get_all_key';
    }


    enum session: string {
      case POST = 'post';
      case GET = 'get';
      case REQUEST = 'request';
      case SET_SESSION = 'set_session';
      case GET_SESSION = 'get_session';
      case UNSET_SESSION = 'unset_session';
   }


  enum path:string {
      case AUTH = __DIR__.'/../controllers/auth.controller.php';
      case PROMOTIONS = __DIR__.'/../controllers/promotion.controller.php';
      case CONTROLLER_DASHBOARD = __DIR__.'/../controllers/controller.dashboard.controller.php';


      case DATA = __DIR__.'/../data/data.json';



      case DASHBOARD = 'dashboard';
      case LOGIN = 'auth&action=voir_formulaire';
  }


  enum model_auth: string{
    case VALIDATE_USER = 'validate_user';
    case CREATE_USER = 'create_user';
    case USER_EXIST = 'utilisateur_exist';
    case PASSWORD_CONFIRME_PASSWORD = 'confirmer_password';
    case GET_USER_BY_LOGIN_PASSWORD = 'utilisateur_connecte';
  }

  enum errors_message:string {
    case CHAMP_VIDE = 'champ_vide';
    case NOT_EXIST = 'utilisateur_not_existe';
    case LOGIN_PASSWORD = 'loginPassword';
    case CHAMP_PASSWORD = 'champ_password';
    case LOGIN_INTROUVABLE = 'login_introuvable';
    case PASSWORD_NOT_EGAL = 'champs_different';
    case UPDATE_SUCCESS = 'update_succee_password';
  }


  enum message:string {
    case CONNEXION_SUCCESS = 'connexion_success';
    case DECONNEXION = 'deconnexion_succee';
  }

  enum Validateur_Connexion: string
    {
      case CHAMP_VIDE = 'champ_vide';
      case CHAMP_PASSWORD = 'champ_password';
      case VALIDE_PASSWORD = 'mot_de_passe';
      case SEARCH_BY_LOGIN = 'search_by_login';
    }



    enum champ:string {
      case LOGIN = 'login';
      case PASSWORD = 'password';
      case CONFIRM_PASSWORD = 'confirm_password';
    }

    