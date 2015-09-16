define( function() {
    
    
    
    
    
    /**
     * Main Object.
     * 
     * @since 1.0.0
     */
    var jCob = function jCob() {
        
        
        
        
        
        /**
         * Holds the currently used jCob core version.
         * 
         * @since 1.0.0
         * @type String
         */
        var core_version = '@VERSION';
        
        
        
        
        
        /**
         * Returns the currently installed version.
         * 
         * @since 1.0.0
         * @returns {String} Installed core version
         */
        this.version = function() {
            
            return core_version;
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );