<?php
namespace MyPlugin\Contracts;

abstract class AjaxListener extends EventListener
{


    /**
     * WordPress doesn't keep the post-global around on an ajax request, 
     * so we do it this way
     *
     * @return void
     */
    protected function setPostGlobal()
    {

        global $post;
        if (!isset($GLOBALS['post']) && isset($_POST['post_id'])) {
            $GLOBALS['post'] = new \stdClass();
            $GLOBALS['post']->ID = absint($_POST['post_id']);
        }
    }


} 