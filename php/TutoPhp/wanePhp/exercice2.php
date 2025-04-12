<?php
$jour = 29;
$mois = 2;
$annee = 2024;

function estBissextile(int $annee): bool {
    return ($annee % 4 === 0 && $annee % 100 !== 0) || ($annee % 400 === 0);
}

$joursMois = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (estBissextile($annee)) {
    $joursMois[2] = 29;
}

$valide = $mois >= 1 && $mois <= 12 && $jour >= 1 && $jour <= $joursMois[$mois];
echo $valide ? "Date valide\n" : "Date invalide\n";
echo estBissextile($annee) ? "Année bissextile\n" : "Année non bissextile\n";

$jourSuiv = $jour;
$moisSuiv = $mois;
$anneeSuiv = $annee;

$jourSuiv++;
if ($jourSuiv > $joursMois[$mois]) {
    $jourSuiv = 1;
    $moisSuiv++;
    if ($moisSuiv > 12) {
        $moisSuiv = 1;
        $anneeSuiv++;
    }
}

echo "Date suivante : $jourSuiv/$moisSuiv/$anneeSuiv\n";

$jourPrec = $jour;
$moisPrec = $mois;
$anneePrec = $annee;

$jourPrec--;
if ($jourPrec < 1) {
    $moisPrec--;
    if ($moisPrec < 1) {
        $moisPrec = 12;
        $anneePrec--;
    }
    $jourPrec = estBissextile($anneePrec) && $moisPrec == 2 ? 29 : $joursMois[$moisPrec];
}

echo "Date précédente : $jourPrec/$moisPrec/$anneePrec\n";
?>
