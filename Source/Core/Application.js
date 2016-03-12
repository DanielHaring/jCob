define( [
    './Controller'
], function() {
    
    
    
    
    
    /**
     * Runtime handler.
     * 
     * @since 1.0.0
     */
    jCob.Application = new function Bootstrap() {
        
        
        
        
        
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
         * Main initialization of the jCob object.
         * 
         * @since 1.0.0
         */
        this.run = function() {
            
            $( document ).ready( loadModules );
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );