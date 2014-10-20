module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: require('./config/clean'),
        copy: require('./config/copy'),
        less: require('./config/less')
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('copylib', ['clean:lib', 'copy:lib']);
    grunt.registerTask('build', ['clean:dist', 'less']);
};
