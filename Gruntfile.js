module.exports = function( grunt ) {
    
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        destinationFolder: 'Distributions',
        build: {
            all: {
                dest: '<%= destinationFolder %>/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            all: {
                files: {
                    '<%= destinationFolder %>/<%= pkg.name %>-<%= pkg.version %>.min.js': 
                            [ '<%= build.all.dest %>' ]
                },
                options: {
                    preserveComments: false,
                    sourceMap: false,
                    report: 'min',
                    beautify: {
                        'ascii_only': true
                    },
                    banner: '/*! <%= pkg.title %> v<%= pkg.version %> | ' 
                            + '(c) <%= pkg.author.name %> | ' 
                            + 'http://www.gnu.org/copyleft/gpl.html */\n'
                }
            }
        }
    } );
    
    require( 'load-grunt-tasks' )( grunt );
    
    grunt.loadTasks( 'Build/Tasks' );
    
    grunt.registerTask( 'compile', [ 'build', 'uglify' ] );
    
};