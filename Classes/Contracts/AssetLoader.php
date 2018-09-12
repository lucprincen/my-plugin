<?php
namespace MyPlugin\Contracts;

abstract class AssetLoader extends StaticInstance
{


    /**
     * Private constructor. Avoid building instances using the
     * 'new' keyword.
     */
    protected function __construct()
    {
        $this->load();
    }


    /**
     * Listen to events
     *
     * @return void
     */
    abstract public function load();


} 