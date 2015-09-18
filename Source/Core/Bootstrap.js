define( [
    './Controller'
], function() {
    
    
    
    
    
    /**
     * Runtime handler.
     * 
     * @since 1.0.0
     */
    jCob.Bootstrap = new function Bootstrap() {
        
        
        
        
        
        /**
         * Holds an instance as pseudo singleton.
         * 
         * @since 1.0.0
         * @type Bootstrap
         */
        var instance;
        
        
        
        
        
        /**
         * Initializes all registered modules.
         * 
         * @since 1.0.0
         */
        function loadModules() {
            
            $.each( ModuleRepository.findAll(), function() {
                
                if( this.isEnabled() ) {
                    
                    this.init();
                    
                }
                
            } );
            
        }
        
        
        
        
        
        /**
         * Returns the pseudo singleton or creates a new one.
         * 
         * @since 1.0.0
         * @returns {Bootstrap} The pseudo singleton
         */
        this.getInstance = function() {
            
            if( !instance ) {
                
                instance = new Bootstrap();
                
            }
            
            return instance;
            
        };
        
        
        
        
        
        /**
         * Main initialization of the jCob object.
         * 
         * @since 1.0.0
         */
        this.run = function() {
            
            $( document ).ready( loadModules );
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );