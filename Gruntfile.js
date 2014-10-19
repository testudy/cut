module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: require('./config/clean'),
        copy: require('./config/copy'),
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('copylib', ['clean:lib', 'copy:lib']);
};
