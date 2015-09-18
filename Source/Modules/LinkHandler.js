define( function() {
    
    
    
    
    
    /**
     * Detects links which should be opened in new windows/tabs.
     * 
     * @since 1.0.0
     */
    jCob.prototype.LinkHandler = new Module( function LinkHandler() {
        
        
        
        
        
        var
        
        /**
         * Storage of file extensions which always should be opened in a new window.
         * 
         * @since 1.0.0
         * @type Array
         */
        externalFiles = [],
        
        /**
         * The scope where to detect external links.
         * 
         * @since 1.0.0
         * @type String
         */
        scope = 'body';
        
        
        
        
        
        /**
         * Forces a link to open up in a new window/tab.
         * 
         * @since 1.0.0
         * @param {Object} e jQuery event object
         */
        function forceWindow( e ) {
            
            e.preventDefault();
            
            window.open( this.href );
            
        }
        
        
        
        
        
        /**
         * Registeres events for links which should be opened in new windows/tabs.
         * 
         * @since 1.0.0
         */
        this.init = function() {
            
            $( 'a[rel="external"]' ).add( $( 'a[href]', scope ).filter( function() {
                
                var href = $( this ).attr( 'href' ),
                    protocolRegExp = '^https?:\/\/';
                
                return ( href.search( new RegExp( protocolRegExp ) ) < 0 && $.inArray( href.split( '.' ).pop().toLowerCase(), externalFiles ) < 0 ) 
                        
                            // match against current host
                        || ( href.search( new RegExp( protocolRegExp + window.location.host + '\/' ) ) >= 0 ) 
                        
                            // match against base-tag if any
                        || ( !!$( 'base[href]' ).length && href.search( new RegExp( protocolRegExp + $( 'base[href]:first' ).attr( 'href' ) + '\/' ) ) >= 0 ) 
                
                ? false : true;
                
            } ) ).click( forceWindow );
            
        };
        
        
        
        
        
        /**
         * Sets the scope where to handle links.
         * 
         * @since 1.0.0
         * @param {String} selector jQuery selector to set as scope
         */
        this.setScope = function( selector ) {
            
            if( $.type( selector ) !== 'string' ) {
                
                throw new TypeError( 'jCob.LinkHandler.setScope requires the first ' 
                        + 'parameter to be of type string, ' + $.type( selector ) + ' given.' );
                
            }
            
            scope = selector;
            
        };
        
        
        
        
        
        /**
         * Registers one or multiple file extensions which to treat as external.
         * 
         * @since 1.0.0
         * @param {String|Array} extensions The file extension(s) to register
         */
        this.registerFiles = function( extensions ) {
            
            if( !$.isArray( extensions ) ) {
                
                extensions = [ extensions ];
                
            }
            
            $.each( extensions, function( key, value ) {
                
                if( $.type( value ) === 'string' && $.inArray( value, externalFiles ) < 0 ) {
                    
                    externalFiles.push( value.toLowerCase() );
                    
                }
                
            } );
            
        };
        
        
        
        
        
        /**
         * Excludes one or multiple file extensions from treating as external.
         * 
         * @since 1.0.0
         * @param {String|Array} extensions The file extension(s) to unregister
         */
        this.unregisterFiles = function( extensions ) {
            
            if( !$.isArray( extensions ) ) {
                
                extensions = [ extensions ];
                
            }
            
            $.each( extensions, function( key, value ) {
                
                var index = $.inArray( value, externalFiles );
                
                if( $.type( value ) === 'string' && index >= 0 ) {
                    
                    externalFiles.splice( index, 1 );
                    
                }
                
            } );
            
        };
        
        
        
        
        
    } );
    
    
    
    
    
} );