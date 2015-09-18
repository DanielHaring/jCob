define( function() {
    
    
    
    
    
    /**
     * The Module Repository.
     * 
     * @since 1.0.0
     */
    var ModuleRepository = jCob.prototype.ModuleRepository = new function ModuleRepository() {
        
        
        
        
        
        /**
         * Module registry.
         * 
         * @since 1.0.0
         * @type array
         */
        var modules = [];
        
        
        
        
        
        /**
         * Adds a module to the repository.
         * 
         * @since 1.0.0
         * @param {jCob.Module} module The module to add to the repository
         */
        this.add = function( module ) {
            
            if( $.inArray( module, modules ) < 0 ) {
                
                modules.push( module );
                
            }
            
        };
        
        
        
        
        
        /**
         * Returns an array of all registered modules.
         * 
         * @since 1.0.0
         * @returns {Array} An array containing every registered module
         */
        this.findAll = function() {
            
            return modules;
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );