<?php

$json_to_array = function():array{
    $json = file_get_contents(__DIR__.'/../data/data.json');
    $data = json_decode($json,true);
    return $data;
};


$array_to_json = function($data){
    file_put_contents(__DIR__.'/../data/data.json',json_encode($data,JSON_PRETTY_PRINT));
};



