<?php require_once __DIR__.'/../enum/all_enums.php'; 

use Enum\errors_message;
?>
<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="new_password.css">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau Password</title>
    <style>
        :root {
            --couleur-blanc: #ffffff;
            --couleur-orange: #ff7700;
            --couleur-texte: #030303;
            --couleur-texte-2: #3d3939;
            --couleur-texte-3: #cccccc;
            --couleur-vert-ment: #00938e;
            --couleur-bordure: #dadada;
        }

        *{
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--couleur-vert-ment);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            min-height: 100vh;
        }

        .container {
            background-color: var(--couleur-blanc);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h2 {
            color: var(--couleur-texte);
            margin-bottom: 1.5rem;
            text-align: center;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            color: var(--couleur-texte-2);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        input[type="password"] {
            padding: 0.75rem;
            border: 1px solid var(--couleur-bordure);
            border-radius: 8px;
            margin-bottom: 1rem;
            font-size: 1rem;
            transition: border 0.3s ease;
        }

        input[type="password"]:focus {
            border-color: var(--couleur-orange);
            outline: none;
        }

        button {
            background-color: green;
            color: var(--couleur-blanc);
            padding: 0.75rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #e46600;
        }

        .error-message {
            color: red;
            font-size: 0.95rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .success-message {
            color: green;
            font-size: 1rem;
            margin-bottom: 1rem;
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="container">
        <h2>Réinitialisation du mot de passe</h2>

        <?php if (!empty($errors)): ?>
            <?php foreach ($errors as $error): ?>
                <div class="error-message"><?= $error ?></div>
            <?php endforeach; ?>
        <?php endif; ?>

        <?php if (!empty($success)): ?>
            <div class="success-message"><?= $success[0] ?></div>
        <?php endif; ?>

        <form action="index.php?page=auth&action=update_password" method="POST">
            <label for="password">Nouveau mot de passe</label>
            <input type="password" name="password" id="password">

            <label for="confirm_password">Confirmer le mot de passe</label>
            <input type="password" name="confirm_password" id="confirm_password">

            <button type="submit">Valider</button>
        </form>

        <a class="back-link" href="index.php?page=auth&action=voir_formulaire">← Retour</a>
    </div>

</body>
</html>
