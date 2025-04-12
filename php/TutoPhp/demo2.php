<?php


$notes = [21,23,45];

$somme = array_sum($notes);
$nombreElement = count($notes);

$moyenne = ($somme / $nombreElement);

echo round($moyenne, 2);
