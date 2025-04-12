<?php
$nombres = [6, 3, 5, 28, 7, 2];

$somme_pairs = 0;
$nombre_parfaits = 0;
$nombre_premiers = 0;
$somme_premiers = 0;

foreach ($nombres as $nombre) {
    
    if ($nombre % 2 == 0) {
        $somme_pairs += $nombre;
    }
    
    $somme_diviseurs = 0;
    for ($i = 1; $i < $nombre; $i++) {
        if ($nombre % $i == 0) {
            $somme_diviseurs += $i;
        }
    }
    if ($somme_diviseurs == $nombre) {
        $nombre_parfaits++;
    }
    
    $est_premier = true;
    
    if ($nombre < 2) {
        $est_premier = false;
    } else {
        for ($i = 2; $i <= $nombre / 2; $i++) {
            if ($nombre % $i == 0) {
                $est_premier = false;
                break;
            }
        }
    }
    
    if ($est_premier) {
        $nombre_premiers++;
        $somme_premiers += $nombre;
    }
}

$total_nombres = count($nombres);
$pourcentage_parfaits = ($nombre_parfaits / $total_nombres) * 100;

if ($nombre_premiers > 0) {
    $moyenne_premiers = $somme_premiers / $nombre_premiers;
} else {
    $moyenne_premiers = 0;
}

echo "Somme des nombres pairs : $somme_pairs\n";
echo "Pourcentage de nombres parfaits : $pourcentage_parfaits%\n";
echo "Moyenne des nombres premiers : $moyenne_premiers\n";
?>