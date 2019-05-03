<?php

	namespace MyPlugin\Admin;

	use \MyPlugin\Contracts\AssetLoader;

	class Assets extends AssetLoader{

		/**
		 * Enqueue scripts & Styles
		 * 
		 * @return void
		 */
		public function load(){

            /**
             * Load our block assets:
             */
            add_action( 'enqueue_block_editor_assets', function(){
                
                wp_enqueue_script( 
                    'my-plugin-editor-scripts',
                    plugin_dir_url(null).'my-plugin/Assets/dist/js/editor.blocks.js',
                    [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n', 'wp-components' ]
                );

                wp_enqueue_style(
                    'my-plugin-editor-style',
                    plugin_dir_url(null).'my-plugin/Assets/dist/css/blocks.editor.css'
                );

            });

		}
	}