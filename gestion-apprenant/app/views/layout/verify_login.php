<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/change_password.css">
</head>
<body>
    <div class="container_body">
        <div class="formulaire">
            <?php if(isset($_SESSION['erreur'])) : ?>
                <div class="message_erreur">
                    <?= $_SESSION['erreur'] ?>
                </div>
            <?php unset($_SESSION['erreur']);?>
            <?php endif ?>
            
            <h2>mot de pass oublie ?</h2>
            <form action="/index.php?page=test_login" method="POST">
                <label for="login">Login</label>
                <input type="text" name="login" placeholder="entrer votre login">
                <button type="submit">Verifier</button>
            </form>
        </div>
        <div class="img_password">
            <img src="assets/images/Account-amico.png" alt="" srcset="">
        </div>
    </div>
</body>
</html>

