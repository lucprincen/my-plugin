<?php

	namespace MyPlugin\Front;

	use Cuisine\Utilities\Url;
	use Cuisine\Wrappers\Script;
	use Cuisine\Wrappers\Sass;
	use MyPlugin\Contracts\AssetLoader;

	class Assets extends AssetLoader{

		/**
		 * Enqueue scripts & Styles
		 * 
		 * @return void
		 */
		public function load(){

			//add blocks:
            add_action( 'enqueue_block_assets', function(){
                wp_enqueue_style(
                    'my-plugin-blocks-style',
                    plugin_dir_url(null).'my-plugin/Assets/dist/css/blocks.style.css'
                );
            });
		}
	}
