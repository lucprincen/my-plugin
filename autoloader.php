<?php
namespace MyPlugin;

class Autoloader
{

    /**
     * Load the initial static files:
     *
     * @return void
     */
    public function load()
    {
        //for the front:
        Front\Assets::getInstance();
        Front\Blocks::getInstance();
        if (is_admin()) {
            Admin\Assets::getInstance();
        }
    }


    /**
     * Register the autoloader
     *
     * @return MyPlugin\Autoloader
     */
    public function register()
    {
        spl_autoload_register(function ($class) {

            if ( stripos( $class, __NAMESPACE__ ) === 0 ) {

                $filePath = str_replace( '\\', DS, substr( $class, strlen( __NAMESPACE__ ) ) );
                include( __DIR__ . DS . 'Classes' . $filePath . '.php' );

            }

        });

        return $this;
    }
}