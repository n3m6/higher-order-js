module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['1-recursion/**/*.js'],
      options: {
        node:     true,
        bitwise:  true,
        browser:  true,
        es5:      true,
        eqeqeq:   true,
        bitwise:  true,
        forin:    true,
        freeze:   true,
        camelcase: true,
        curly:    true,
        nonew:    true,
        plusplus: true,
        quotmark: "single",
        undef:    true,
        immed:    true,
        indent:   2,
        latedef:  true,
        newcap:   true,
        noarg:    true,
        unused:   true,
        regexp:   true,
        strict:   true,
        maxlen:   80,
        maxparams: 5,
        maxdepth: 5,
        maxstatements: 25,
        maxcomplexity: 10,
        white: true,
        globals: {
          console: true,
          /* Mocha */
          "describe": false,
          "it":       false,
          "before":   false,
          "beforeEach": false,
          "after":    false,
          "afterEach":  false 
        }
      }
    },

    mochaTest: {
      test: {
        src: ['test/**/*.js'],
        options: {
          reporter: 'spec'
        }
      }
    },

    watch: {
      all: {
        files: ['test/**/*.js', '1-recursion/**/*.js'],
        tasks: ['jshint']
      }
    }

  });

  //load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //register this task
  grunt.registerTask('default', 'jshint');
  grunt.registerTask('hint', 'jshint');
  grunt.registerTask('test', 'mochaTest');
  //grunt.registerTask('watch', 'watch:all');

};

