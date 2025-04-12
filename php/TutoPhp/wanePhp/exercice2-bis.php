<?php
date_default_timezone_set("Africa/Dakar");

$maintenant = time();
$annee = date('Y', $maintenant);

echo "Français long : " . date("l d F Y, H\hi", $maintenant) . "\n";
echo "Français abrégé : " . date("d/m/Y", $maintenant) . "\n";

echo "Anglais long : " . date("l F d Y, h:i A", $maintenant) . "\n";
echo "Anglais abrégé : " . date("m/d/Y", $maintenant) . "\n";

$debut_annee = strtotime("$annee-01-01");
$fin_annee = strtotime("$annee-12-31");

$jours_restants = ($fin_annee - $maintenant) / (60 * 60 * 24);
$jours_ecoules = ($maintenant - $debut_annee) / (60 * 60 * 24);

echo "Jours restants : " . round($jours_restants) . "\n";
echo "Jours écoulés : " . round($jours_ecoules) . "\n";

if (($annee % 4 == 0 && $annee % 100 != 0) || $annee % 400 == 0) {
    echo "Année bissextile\n";
} else {
    echo "Année non bissextile\n";
}
?>