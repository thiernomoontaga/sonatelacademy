<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>GESTION APPRENANT</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/css/promo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <title><?= $title ?? "Page" ?></title>
    <link rel="stylesheet" href="assets/css/layout.css">
</head>
<body>

    <input type="checkbox" id="menu-toggle" hidden>
    <label for="menu-toggle" class="toggle-sidebar">☰ Menu</label>

    <div class="layout">
        <aside class="sidebar">
            <div>
                <div class="logo-container">
                    <div class="logo">
                        <img src="assets/images/d.png" alt="">
                    </div>
                    <div class="promotion-label">Promotion - 2025</div>
                </div>

                <nav>
                    <ul>
                        <li><a href="index.php?page=dashboard&action=dashboard"><i class="fas fa-home"></i> Tableau de bord</a></li>
                        <li><a href="index.php?page=dashboard&action=promotion"><i class="fas fa-folder"></i> Promotions</a></li>
                        <li><a href="index.php?page=dashboard&action=référentiels"><i class="fas fa-book"></i> Référentiels</a></li>
                        <li><a href="#"><i class="fas fa-users"></i> Apprenants</a></li>
                        <li><a href="#"><i class="fas fa-calendar-check"></i> Gestion des présences</a></li>
                        <li><a href="#"><i class="fas fa-laptop"></i> Kits & Laptops</a></li>
                        <li><a href="#"><i class="fas fa-chart-bar"></i> Rapports & Stats</a></li>
                    </ul>
                </nav>
            </div>

            <div class="logout">
            <form method="post" action="index.php">
                <input type="hidden" name="action" value="logout">
                <button type="submit"><i class="fas fa-sign-out-alt"></i> Déconnexion</button>
            </form>
            </div>
        </aside>
        <div class="main-area">
            <div class="topbar">
                    <div class="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search">
                    </div>
                    <div class="user-info">
                        <button class="notifications">
                            <i class="fas fa-bell"></i>
                        </button>
                        <div class="user-details">
                        <span class="user-name"><?= htmlspecialchars($user['login'] ?? 'Invité') ?></span>
                            <span class="user-role"><?= htmlspecialchars($user['role'] ?? '') ?></span>
                        </div>
                        <div class="user-avatar">
                            <img src="<?= htmlspecialchars($user['image'] ?? 'assets/images/a.png') ?>" alt="Avatar">
                        </div>
                    </div>
                </div>
            <main>
                <?= $content ?? ''?>
            </main>   
        </div>
</div>

</body>
</html>