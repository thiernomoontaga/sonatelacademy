<!-- separation de la logique metier et de la vue -->

 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
<?php
    require_once 'views/form.php';
    $adeviner = 50;
    $erreur = NULL;
    $succes = NULL;
    $value = NULL;
    if($_POST['chiffre']){

        if($_POST['chiffre'] > $adeviner){
            $erreur = "nombre tres grand ! ";
        }
        elseif($_POST['chiffre'] < $adeviner){
            $erreur = "nombre tres petit !";
        }
        else
        {
            $succes = "bravo ! vous avez trouver ! ";
        }
        
        $value = (int)$_POST['chiffre'];
    }
?>

<!-- l'affichage des erreurs  -->
    <?php if($erreur):?>
        <div class="alert alert-danger">
            <?= $erreur ?>
        </div>
        <?php elseif($succes):?>
        <div class="alert alert-success">
            <?= $succes ?>
        </div>
    <?php endif ?>

<form action="/index.php" method="POST">
    <div class="form-group">
        <input type="number" name="chiffre" value="<?= htmlentities($value); ?>">
    </div>
    <button type="submit" class="btn btn-primary">Deviner</button>
</form>

