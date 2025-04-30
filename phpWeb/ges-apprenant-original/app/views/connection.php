<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ges-apprenants login</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body class = "body_form">
    <div class="conteneur">
        <img src="assets/images/logoApp.png" alt="logo site">
        <div class="bienvenu">
            <div class = "bienvenu-1">Bienvenu sur</div>
            <div class = "ecole">Ecole du code Sonatel Academy</div>
        </div>
        <div class="se-connecter">
            Se connecter
        </div>
        <div class="formulaire">
            <?php if (isset($_SESSION['errors']['not_exist'])): ?>
                <div class="erreurs" style="color: red;">
                    <?= htmlspecialchars($_SESSION['errors']['not_exist']) ?>
                </div>
            <?php endif; ?>

            <form action="index.php?page=login" method="POST">
                <div class="login">
                    <label for="login">Login</label>
                    <input type="text" placeholder="Matricule ou email" name="login" value="<?= $_SESSION['old']['login'] ?? '' ?>">
                    <?php if (isset($_SESSION['errors']['login'])): ?>
                        <div class="erreur-champ" style="color: red;">
                            <?= htmlspecialchars($_SESSION['errors']['login']) ?>
                        </div>
                    <?php endif; ?>
                </div>

                <div class="password">
                    <label for="password">Mot de Passe</label>
                    <input type="password" placeholder="Mot de Passe" name="password">
                    <?php if (isset($_SESSION['errors']['password'])): ?>
                        <div class="erreur-champ" style="color: red;">
                            <?= htmlspecialchars($_SESSION['errors']['password']) ?>
                        </div>
                    <?php endif; ?>
                </div>

                <a href="#">Mot de passe oublié ?</a>

                <div class="connexion">
                    <button type="submit">Se connecter</button>
                </div>
            </form>

            <?php
                unset($_SESSION['errors']);
                unset($_SESSION['old']);
            ?>
        </div>


    </div>
</body>
</html>




