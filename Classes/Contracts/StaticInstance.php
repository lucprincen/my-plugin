<?php
namespace MyPlugin\Contracts;

abstract class StaticInstance
{


    /**
     * Static bootstrapped instance.
     *
     * @var \MyPlugin\Contracts\StaticInstance
     */
    public static $instance = null;


    /**
     * Private constructor. Avoid building instances using the
     * 'new' keyword.
     */
    protected function __construct()
    {
    }


    /**
     * Init the Assets Class
     *
     * @return \MyPlugin\Contracts\StaticInstance
     */
    public static function getInstance()
    {
        if (version_compare(PHP_VERSION, '7.2.0', '>=')) {
            // Ignores notices and reports all other kinds... and warnings
            error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
        }
        
        return static::$instance = new static();

    }


} 