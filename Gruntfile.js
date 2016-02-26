'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    // Task configuration.
    concat: {
	  css: {
        src: ['css/*.css'],
        dest: 'build/css/styles.css'
      },
      js: {
        src: ['js/*.js'],
        dest: 'build/js/scripts.js'
      },
    },
	sass: {
      dist: {
        files: {
          ['css/style.css']: ['node_modules/bootstrap-sass/assets/stylesheets/main.scss']
       	}
      }
  	},
    watch: {
      css: {
        files: 'css/*.css',
        tasks: ['insert_timestamp', 'concat:css']
      },
	  sass: {
        files: 'node_modules/bootstrap-sass/assets/stylesheets/main.scss',
        tasks: ['insert_timestamp', 'sass']
      },
      
      js: {
        files: 'js/*.js',
        tasks: ['insert_timestamp', 'concat:js']
      },
    },
	insert_timestamp: {
 
    // Default options 
    options: {
      prepend: true,
      append: false,
      format: 'yyyy-mm-dd HH:MM:ss',
      //template: '/* {timestamp} */',
      datetime: new Date(),
      insertNewlines: true
    },
 
    // Sample usage with js files 
    js: {
      options: {
        // Uses default output of `Date()` 
        format: false,
        template: 'dateString = "{timestamp}"\n',
        insertNewlines: false
      },
      files: [{
        // Use dynamic extend name 
        expand: true,
        // Source dir 
        //cwd: 'js',
        // Match files 
        src: ['timestamp.js'],
        // Output files 
        dest: 'js',
        ext: '.js'
      }]
    }
  }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-insert-timestamp');
	
  // Default task.
  grunt.registerTask('default', ['insert_timestamp', 'sass', 'concat', 'watch']);

};
