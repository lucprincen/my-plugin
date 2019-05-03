<?php

	namespace MyPlugin\Front;

	use MyPlugin\Contracts\StaticInstance;

	class Blocks extends StaticInstance{

        /**
         * Constructor
         */
        public function __construct()
        {
            $this->register();
        }

		/**
		 * Enqueue scripts & Styles
		 * 
		 * @return void
		 */
		public function register(){
            //register the block-type:

            register_block_type(
                'my-plugin/intro',
                ['render_callback' => [ $this, 'intro_callback' ] ]
            );

            register_block_type( 
                'my-plugin/dynamic', 
                [ 'render_callback' => [ $this, 'dynamic_callback' ] ]
            );
        }


        public function intro_callback( $attr )
        {
            return '<p class="intro">'.$attr['intro'].'</p>';
        }
        
        /**
         * Dynamische content
         *
         * @return String
         */
        public function dynamic_callback( $attr )
        {
            if( !isset( $attr['posts_per_page'] ) ){
                $attr['posts_per_page'] = 4;
            }

            $posts = new \WP_Query(['posts_per_page' => $attr['posts_per_page'] ] );

            $html = '<ul class="post-list">';

            while( $posts->have_posts() ){
                $posts->the_post();
                $html .= '<li>';
                    $html .= '<strong>'. get_the_title() .'</strong>';
                $html .= '</li>';
            }

            $html .= '</ul>';

            return $html;
        }
	}
