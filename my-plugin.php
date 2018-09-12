<?php
/**
 * Plugin Name: Boilerplat Gutenberg Blocks!
 * Plugin URI: https://www.lucp.nl
 * Description: Boilerplate plugin for creating Gutenberg Blocks
 * Version: 1.0
 * Author: Luc Princen
 * Author URI: https://www.lucp.nl/
 * License: GPLv3
 * 
 * @package Cuisine
 * @category Core
 * @author Luc Princen
 */

//change this namespace
namespace MyPlugin;

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

// The directory separator.
defined('DS') ? DS : define('DS', DIRECTORY_SEPARATOR);


/**
 * Main class that bootstraps the plugin.
 */
if (!class_exists('PluginIgniter')) {

    class PluginIgniter {
    
        /**
         * Plugin bootstrap instance.
         *
         * @var \MyPlugin\PluginIgniter
         */
        private static $instance = null;


        /**
         * Plugin directory name.
         *
         * @var string
         */
        private static $dirName = '';

        private function __construct(){

            static::$dirName = static::setDirName(__DIR__);

            // Load plugin.
            $this->load();
        
        }


        /**
         * Load the framework classes.
         *
         * @return void
         */
        private function load(){

            //require the language domain:
            $path = __DIR__ . DS . '/Languages/';
            load_plugin_textdomain( 'myplugin', false, $path );

            //require the autoloader:
            require( __DIR__ . DS . 'autoloader.php');

            //initiate the autoloader:
            ( new \MyPlugin\Autoloader() )->register()->load();

            //give off the loaded hook
            do_action( 'MyPlugin_loaded' );

        }

        /*=============================================================*/
        /**             Getters & Setters                              */
        /*=============================================================*/


        /**
         * Init the plugin classes
         *
         * @return \MyPlugin\PluginIgniter
         */
        public static function getInstance(){

            if ( is_null( static::$instance ) ){
                static::$instance = new static();
            }
            return static::$instance;
        }

        /**
         * Set the plugin directory property. This property
         * is used as 'key' in order to retrieve the plugins
         * informations.
         *
         * @param string
         * @return string
         */
        private static function setDirName($path) {

            $parent = static::getParentDirectoryName(dirname($path));

            $dirName = explode($parent, $path);
            $dirName = substr($dirName[1], 1);

            return $dirName;
        }

        /**
         * Check if the plugin is inside the 'mu-plugins'
         * or 'plugin' directory.
         *
         * @param string $path
         * @return string
         */
        private static function getParentDirectoryName($path) {

            // Check if in the 'mu-plugins' directory.
            if (WPMU_PLUGIN_DIR === $path) {
                return 'mu-plugins';
            }

            // Install as a classic plugin.
            return 'plugins';
        }

        

        /**
         * Get the plugin path
         * 
         * @return string
         */
        public static function getPluginPath(){
        	return __DIR__.DS;
        }

        /**
         * Returns the directory name.
         *
         * @return string
         */
        public static function getDirName(){
            return static::$dirName;
        }

    }
}


/**
 * Load the main class, when WP is loaded
 *
 */
add_action('plugins_loaded', function(){
    \MyPlugin\PluginIgniter::getInstance();
});


/**
 * Registration & deactivation:
 */
register_activation_hook( __FILE__, function(){
    update_option( 'MyPlugin_activated', 'MyPlugin' );
    do_action( 'MyPlugin_activated' );
});


/**
 * Print_R in a <pre> tag
 */
if( !function_exists( 'dump' ) ){
    function dump( $arr ){
        echo '<pre>';
            print_r( $arr );
        echo '</pre>';
    }
}

/**
 * Print_R in a <pre> tag and die
 */
if( !function_exists( 'dd' ) ){
    function dd( $arr ){
        dump( $arr );
        die();
    }
}
