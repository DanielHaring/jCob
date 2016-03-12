define( [
    './Controller'
], function() {
    
    
    
    
    
    /**
     * Runtime handler.
     * 
     * @since 1.0.0
     */
    var Application = jCob.Application = new function Application() {





        var

        /**
         * Tells if the application was initialized.
         *
         * @since 2.0.0
         * @type Boolean
         */
        initialized = false;





        /**
         * Initializes the application.
         *
         * @since 2.0.0
         */
        function initialize() {

            initialized = true;

            loadComponents();

        }





        /**
         * Initializes all registered components.
         * 
         * @since 1.0.0
         */
        function loadComponents() {
            
            $.each( ComponentRepository.findAll(), function() {
                
                if( this.isEnabled() ) {
                    
                    this.run();
                    
                }
                
            } );
            
        }
        
        
        
        
        
        /**
         * Main initialization of the jCob object.
         * 
         * @since 1.0.0
         */
        this.run = function() {
            
            $( document ).ready( initialize );
            
        };





        /**
         * Checks wheter the application already was initialized.
         *
         * @since 2.0.0
         * @returns {Boolean} true if the application was initialized, false otherwise
         */
        this.isInitialized = function() {

            return !!initialized;

        }





    };
    
    
    
    
    
} );