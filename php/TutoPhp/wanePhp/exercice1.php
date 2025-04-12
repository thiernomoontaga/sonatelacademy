<?php
// exploration de la configuration PHP 

echo 'La version de php installer est : '.phpversion()."\n";

echo 'les extensions actives : '.phpinfo()."\n";
echo ini_get('memory_limit');
echo ini_get('upload_max_filesize');  // 
echo ini_get('post_max_size');        
echo ini_get('max_execution_time');  
