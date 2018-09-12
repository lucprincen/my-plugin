<?php

    namespace MyPlugin\Contracts;
    
    use WP_REST_Request;
    use MyPlugin\Contracts\StaticInstance;

    abstract class Endpoint extends StaticInstance{

        /**
         * Set default method
         *
         * @var string
         */
        public $method = 'GET';

        /**
         * String endpoint
         *
         * @var string
         */
        public $endpoint = '';

        
        /**
         * Request parameters
         *
         * @var Array
         */
        public $params = [];


        /**
         * Constructor
         */
        public function __construct()
        {
            add_action( 'rest_api_init', [ $this, 'register' ] );
        }

        /**
         * Registration function
         *
         * @return void
         */
        public function register()
        {   
            register_rest_route( 
                $this->getNamespace(), 
                $this->getEndpoint(), 
                [
                    'methods' => $this->method,
                    'callback' => [ $this, 'callback' ]
                ]
            );   
        }

        /**
         * Default callback
         *
         * @param $request WP_REST_Request
         * 
         * @return String
         */
        public function callback( WP_REST_Request $request )
        {
            return '';
        }

        /**
         * Returns the endpoint;
         *
         * @return String
         */
        public function getEndpoint()
        {
            return $this->endpoint;
        }

        /**
         * Default url
         *
         * @return String
         */
        protected function getNamespace()
        {
            return 'MyPlugin/v1/';
        }
    }