define( [
    '../Repository/ModuleRepository'
], function() {
    
    
    
    
    
    /**
     * Domain model for modules.
     * 
     * @since 1.0.0
     * @param {function} Descendant The function which should be treated as module
     * @returns {jCob.Module} Instance of itself
     */
    var Module = jCob.prototype.Module = function Module( Descendant ) {
        
        
        
        
        
        /**
         * Determines, if the module should be called automatically.
         * 
         * @since 1.0.0
         * @type Boolean
         */
        var enabled = true;
        
        /**
         * Stores the internal constructor name.
         * 
         * @since 1.0.0
         * @type String
         */
        var name = this.constructor.name;
        
        
        
        
        
        /**
         * Enables the module for auto loading.
         * 
         * @since 1.0.0
         */
        this.enable = function(){
            
            enabled = true;
            
        };
        
        
        
        
        
        /**
         * Disables the module for auto loading.
         * 
         * @since 1.0.0
         */
        this.disable = function() {
            
            enabled = false;
            
        };
        
        
        
        
        
        /**
         * Determines if the module is enabled for auto loading.
         * 
         * @since 1.0.0
         * @returns {Boolean} True if the module is enabled for auto loading, false otherwise.
         */
        this.isEnabled = function() {
            
            return !!enabled;
            
        };
        
        
        
        
        
        /**
         * Initializes the module. 
         * Can be seen as some kind of abstract method as it throws a warning, 
         * if the function wasn't overwritten.
         * 
         * @since 1.0.0
         */
        this.init = function() {
            
            window.console && console.warn( ( this.getName() || 'Anonymus instance ' ) 
                    + ' doesn\'t provide an initializing function and therefore was skipped.' );
            
        };
        
        
        
        
        
        /**
         * Returns the internal constructor name.
         * 
         * @since 1.0.0
         * @returns {String} The internal constructor name
         */
        this.getName = function() {
            
            return name;
            
        };
        
        
        
        
        
        var Instance = this;
        
            // derive given function if any
        if( $.type( Descendant ) === 'function' ) {
            
            name = Descendant.name;
            
            var clone = new function GenericModule() {};
            
            $.extend( true, clone, this );
            
            Descendant.prototype = clone;
            
            Instance = new Descendant();
            
        }
        
            // Add to repository
        ModuleRepository.add( Instance );
        
        return Instance;
        
        
        
        
        
    };
    
    
    
    
    
} );