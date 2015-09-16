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
            
            window.console.log( '200 OK' );
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );