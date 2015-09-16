define( function() {
    
    
    
    
    
    /**
     * Signal Slot Dispatcher.
     * 
     * @since 1.0.0
     */
    jCob.prototype.SignalSlot = new function SignalSlot() {
        
        
        
        
        
        /**
         * Slot registry.
         * 
         * @since 1.0.0
         * @type Object
         */
        var slots = {};
        
        
        
        
        
        /**
         * Calls all slots of the given signal.
         * 
         * @since 1.0.0
         * @param {String} identifier The name of the signal to fire
         * @param {mixed} param1 First optional parameter which should be passed
         */
        this.dispatch = function( identifier, param1 ) {
            
            var parameters = $.makeArray( arguments );
            
            parameters.shift();
            
            parameters = parameters.map( function( value ) {
                
                return '"' + value + '"';
                
            } );
            
            if( slots[ identifier ] && $.isArray( slots[ identifier ] ) ) {
                
                $.each( slots[ identifier ], function() {
                    
                    eval( 'window.' + this + '(' + parameters.join( ', ' ) + ');' );
                    
                } );
                
            }
            
        };
        
        
        
        
        
        /**
         * Registeres a slot for the given signal.
         * 
         * @since 1.0.0
         * @param {String} identifier The name of the singal to register the slot for
         * @param {String} fqfn Fully qualified function name of the function to register
         */
        this.connect = function( identifier, fqfn ) {
            
            if( !$.isArray( slots[ identifier ] ) ) {
                
                slots[ identifier ] = [];
                
            }
            
            if( $.inArray( fqfn, slots[ identifier ] ) < 0 ) {
                
                slots[ identifier ].push( fqfn );
                
            }
            
        };
        
        
        
        
        
    };
    
    
    
    
    
} );