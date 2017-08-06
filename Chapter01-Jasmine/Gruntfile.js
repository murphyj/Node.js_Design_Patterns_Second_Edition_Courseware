module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.initConfig({
    jasmine_node: {
        options: {
            forceExit: true,
            match: '.',
            matchall: false,
            extensions: 'js',
            specNameMatcher: 'spec'
        },
        all: ['spec/']
    },
    watch: {
      js: {
        files: ['chapter-one/*.js', 'spec/**/*.spec.js'],
        tasks: ['test']
      }
    }
  });

  grunt.registerTask('test', 'jasmine_node');
  grunt.registerTask('default', 'watch');
}
