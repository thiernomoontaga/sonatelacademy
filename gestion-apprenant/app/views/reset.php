<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reset</title>
    <link rel="stylesheet" href="assets/css/reset.css">
</head>
<body>
    <div class="container_body">
        <div class="formulaire">
            
            <?php if(isset($_SESSION['fail'])) : ?>
                <div class="message_erreur">
                    <?= $_SESSION['fail'] ?> 
                </div>
            <?php unset($_SESSION['fail']);?>
            <?php endif ?>

            
            <h2>Reinitialisation de votre mot de passe</h2>
            <form action="/index.php?page=reset" method="POST">
                <label for="login">Mot de passe</label>
                <input type="password" name="reset_password" placeholder="entrer votre mot de passe">
                <label for="login">confirmer mot de passe</label>
                <input type="password" name="confirm_reset_password" placeholder="confirmez votre mot de passe ">
                <button type="submit">Reinitialiser le mot de passe</button>
            </form>
        </div>
        <div class="img_password">
            <img src="assets/images/Account-amico.png" alt="" srcset="">
        </div>
    </div>
</body>
</html>

