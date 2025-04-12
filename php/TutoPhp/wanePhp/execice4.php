<?php
$etudiants = [
    ["nom" => "bakary", "notes" => [10, 14, 15]],
    ["nom" => "jeery",  "notes" => [12, 9, 8]],
    ["nom" => "Thierno", "notes" => [18, 19, 17]]
];

$meilleure_note = 0;
$meilleur_etudiant = "";

foreach ($etudiants as $etudiant) {
    $nom = $etudiant["nom"];
    $liste_notes = $etudiant["notes"];
    
    $note_max = max($liste_notes);
    
    $somme_notes = array_sum($liste_notes);
    $nombre_notes = count($liste_notes);
    $moyenne = $somme_notes / $nombre_notes;
    
    echo "Étudiant: $nom\n";
    echo "- Note la plus haute: $note_max\n";
    echo "- Moyenne: $moyenne\n";
    echo "----------------\n";
    
    if ($note_max > $meilleure_note) {
        $meilleure_note = $note_max;
        $meilleur_etudiant = $nom;
    }
}

echo "\nRÉSULTAT FINAL:\n";
echo "Le meilleur étudiant est $meilleur_etudiant avec une note de $meilleure_note/20\n";
?>
