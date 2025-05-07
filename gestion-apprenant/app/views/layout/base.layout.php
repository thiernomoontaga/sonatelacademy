<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>layout</title>
    <link rel="stylesheet" href="assets/css/base.layout.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>
    
    <aside>
        <div class="img_sonatel">
            <img src="assets/images/sonatel-image.jpeg" alt="">
        </div>
        <div class="promo">
            promo 2025
        </div>
        <div class="tableau_menu">
            <a href="/index.php?page=dashbord">  
                <div  class="tb tb1">
                <i class='bx bxs-dashboard' style='color:#ff7900'></i>
                <p>tableau de bord</p>
                </div>
            </a>
            <a href="index.php?page=promo">
               <div  class="tb tb2">
               <i class='bx bxs-folder-minus' style='color:#ff7900' ></i>
               <p>Promotions</p>
            </div>
            </a>
            <a href="/index.php?page=referentiel">
                <div  class="tb tb3">
                <i class='bx bxs-folder-minus' style='color:#ff7900' ></i>
                <p>Referentiels</p>
            </div>
            </a>
            <a href="">
               <div  class="tb tb4">
               <i class='bx bxs-user' style='color:#ff7900' ></i>
               <p>Apprenants</p>
               </div>
            </a>
            <a href="">
                <div  class="tb tb4">
                <i class='bx bxs-folder-minus' style='color:#ff7900' ></i>
                <p>Gestions des presences</p>
                </div>
            </a>
            <a href="">
                <div  class="tb tb5">
                <i class='bx bxs-folder-minus' style='color:#ff7900' ></i>
                <p>Kits & Laptop</p>
                </div>
            </a>
           <a href="">
               <div  class="tb tb5">
               <i class='bx bx-list-check' style='color:#ff7900' ></i>
               <p>Rapports & stats</p>
               </div>
           </a>
           

            <div class="deconnexion">
                <a href="index.php?page=logout"><button type="button" class="bouton_deconnexion"><i class='bx bx-log-out' style='color:#ff7900' ></i><span class="txt">Deconnexion</span></button></a>
            </div>
            
        </div>
    </aside>
   <section>
    <header>
        <div class="recherche">
            <i class='bx bx-search' style='color:#c9c8c6'  ></i>
            <input type="text" value="" placeholder="search">
        </div>
        <div class="info_admin">
            <i class='bx bxs-bell-ring' undefined ></i>
            <div class="name_prenom_title">
                <div class="name_prenom">
                    <?php echo $name_prenom ?? 'Nazir segnane' ?>
                </div>
                <div class="title">
                    <?php echo $title ?? 'Admin' ?>
                </div>
            </div>
            <div class="photo">
                <?php $photo ?? ''?>
                <img src="assets/images/defaut.png" alt="" srcset="">
            </div>
        </div>
    </header>
    <main>
        <?= $content ?? '' ?>
    </main>
   </section>
    
    
</body>
</html>