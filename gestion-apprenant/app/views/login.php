<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>page login</title>
    
    <link rel="stylesheet" href="assets/css/login.css">
  
<body>
   <div class ="container">
        <img src="assets/images/sonatel-image.jpeg" alt="">
        <p class="texte_noir">Bienvenu sur </p>
        <p class="texte_orange">Ecole du code Sonatel academy</p>
        <h1>Se connecter</h1>
           <?php if(isset($_SESSION['message'])) : ?>
               <div class="deconnexion">
                    <?= $_SESSION['message'] ?>
               </div>
               <?php unset($_SESSION['message']); ?>
            <?php endif ?>
           <form action="/index.php?page=login" method="POST" class="formulaire"> 
                <label for="login">login</label>
                <input type="text" name="login" placeholder="matricule ou login">
                <label for="login">password</label>
                <input type="password" name="password" placeholder="mot de passe">
                <a href="/index.php?page=verify_login">mot de pass oublie?</a>
                <button type="submit">Se connecter</button>
            </form>

        
   </div>
</body>
</html>
