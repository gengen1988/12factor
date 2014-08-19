module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  var appConfig = {
    app: '.'
  };

  grunt.initConfig({
    config: appConfig,
    connect: {
      dev: {
        options: {
          port: 9000,
          keepalive: true,
          base: '<%= config.app %>'
        }
      }
    }
  });

  grunt.registerTask('default', ['connect:dev']);
};
