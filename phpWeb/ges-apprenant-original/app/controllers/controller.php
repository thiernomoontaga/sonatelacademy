<?php


    function redirect_to_root(string $path): void {
        header('Location: index.php?page=' . $path);
        exit;
    }


    function render_view(string $view, array $data = [], string $layout = null): void {
        extract($data);
    
        $viewPath = __DIR__ . '/../views/' . $view . '.view.php';
    
        if ($layout) {
            ob_start();
            require $viewPath;
            $content = ob_get_clean();
    
            require __DIR__ . '/../views/layout/' . $layout . '.layout.php';
        } else {
            require $viewPath;
        }
    }
    
    


