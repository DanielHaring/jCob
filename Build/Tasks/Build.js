/**
 * Default task for building jCob.
 * Merges required files, specified by the component list.
 */
module.exports = function( grunt ) {
    
    "use strict";
    
    var requirejs = require( 'requirejs' ),
        config = {
            baseUrl: 'Source',
            name: 'jcob',
            out: 'Build/jcob.js',
            optimize: 'none',
            findNestedDependencies: true,
            generateSourceMaps: false,
            skipModuleInsertion: true,
            skipSemiColonInsertion: true,
            preserveLicenseComments: true,
            inlineText: true,
            rawText: {},
            onBuildWrite: splinter
        };
    
    /**
     * Removes AMD specific calls to ensure it can be loaded out of AMD context.
     * 
     * @param {type} namespace Internal namespace
     * @param {type} file Path to the corresponding file
     * @param {type} body Contents of the given file
     * @returns {Sring} Independed code
     */
    function splinter( namespace, file, body ) {
        
        return body.replace( /\s*return\s+[^\}]+(\}\s*?\);[^\w\}]*)$/, "$1" )
                .replace( /\s*exports\.\w+\s*=\s*\w+;/g, "" )
                .replace( /define\([^{]*?{/, "" )
                .replace( /\}\s*?\);[^}\w]*$/, "" )
                .replace( /\/\*\s*ExcludeStart\s*\*\/[\w\W]*?\/\*\s*ExcludeEnd\s*\*\//ig, "" )
                .replace( /\/\/\s*BuildExclude\n\r?[\w\W]*?\n\r?/ig, "" )
                .replace( /define\(\[[^\]]*\]\)[\W\n]+$/, "" );
        
    };
    
    grunt.registerMultiTask( 
            'build', 
            'Concatenate required files, depending on selected components', 
            function() {
        
        var destination = this.data.dest,
            exit = this.async();
        
        /**
         * After compilation has finished, a bunch of pre-defined markers 
         * will be replaced with their respective value.
         * 
         * @param {String} merged Result of the merging process
         */
        config.out = function( merged ) {
            
            merged = merged.replace( /@VERSION/g, grunt.config( 'pkg.version' ) );
            
            grunt.file.write( destination, merged );
            
        };
        
        requirejs.optimize( config, function( response ) {
            
            grunt.verbose.writeln( response );
            grunt.log.ok( 'Compiled file was saved to ' + destination + '.' );
            exit();
            
        }, function( err ) {
            
            exit( err );
            
        } );
        
    } );
    
};