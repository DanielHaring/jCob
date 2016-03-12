define( [
    '../Repository/ComponentRepository'
], function() {
    
    
    
    
    
    /**
     * Domain model for components.
     * 
     * @since 1.0.0
     * @param {function} Descendant The function which should be treated as component
     * @returns {jCob.Component} Instance of itself
     */
    var Component = jCob.prototype.Component = function Component( Descendant ) {
        
        
        
        
        
        /**
         * Determines, if the component should be called automatically.
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
         * Enables the component for auto loading.
         * 
         * @since 1.0.0
         */
        this.enable = function(){
            
            enabled = true;
            
        };
        
        
        
        
        
        /**
         * Disables the component for auto loading.
         * 
         * @since 1.0.0
         */
        this.disable = function() {
            
            enabled = false;
            
        };
        
        
        
        
        
        /**
         * Determines if the component is enabled for auto loading.
         * 
         * @since 1.0.0
         * @returns {Boolean} True if the component is enabled for auto loading, false otherwise.
         */
        this.isEnabled = function() {
            
            return !!enabled;
            
        };
        
        
        
        
        
        /**
         * Initializes the component.
         * Can be seen as some kind of abstract method as it throws a warning, 
         * if the function wasn't overwritten.
         * 
         * @since 1.0.0
         */
        this.run = function() {
            
            window.console && console.warn( ( this.getName() || 'Anonymus instance ' ) 
                    + ' doesn\'t provide a \'run\' method and therefore was skipped.' );
            
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
            
            var clone = new function GenericComponent() {};
            
            $.extend( true, clone, this );
            
            Descendant.prototype = clone;
            
            Instance = new Descendant();
            
        }
        
            // Add to repository
        ComponentRepository.add( Instance );
        
        return Instance;
        
        
        
        
        
    };
    
    
    
    
    
} );