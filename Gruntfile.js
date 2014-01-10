module.exports = function(grunt) {

grunt.initConfig({
  compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets',
          imagesDir: 'images',
          //environment: 'development',
          environment: 'production',
          //outputStyle: 'expanded',
          outputStyle: 'compressed',
          relativeAssets: true,
          //noLineComments: true
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      },
    }
 });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['compass']);
};