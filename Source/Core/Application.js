define( [
    './Controller'
], function() {
    
    
    
    
    
    /**
     * Runtime handler.
     * 
     * @since 1.0.0
     */
    jCob.Application = new function Application() {
        
        
        
        
        
        /**
         * Initializes all registered components.
         * 
         * @since 1.0.0
         */
        function loadComponents() {
            
            $.each( ComponentRepository.findAll(), function() {
                
                if( this.isEnabled() ) {
                    
                    this.init();
                    
                }
                
            } );
            
        }
        
        
        
        
        
        /**
         * Main initialization of the jCob object.
         * 
         * @since 1.0.0
         */
        this.run = function() {
            
            $( document ).ready( loadComponents );
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );