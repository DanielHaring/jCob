define( function() {
    
    
    
    
    
    /**
     * The Component Repository.
     * 
     * @since 1.0.0
     */
    var ComponentRepository = jCob.prototype.ComponentRepository = new function ComponentRepository() {
        
        
        
        
        
        /**
         * Component registry.
         * 
         * @since 1.0.0
         * @type array
         */
        var components = [];
        
        
        
        
        
        /**
         * Adds a component to the repository.
         * 
         * @since 1.0.0
         * @param {jCob.Component} component The component to add to the repository
         */
        this.add = function( component ) {
            
            if( $.inArray( component, components ) < 0 ) {
                
                components.push( component );
                
            }
            
        };
        
        
        
        
        
        /**
         * Returns an array of all registered components.
         * 
         * @since 1.0.0
         * @returns {Array} An array containing every registered component
         */
        this.findAll = function() {
            
            return components;
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );