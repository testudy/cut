module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: require('./config/clean'),
        copy: require('./config/copy'),
        concat: require('./config/concat'),
        less: require('./config/less'),
        useminPrepare: require('./config/useminPrepare'),
        filerev: require('./config/filerev'),
        usemin: require('./config/usemin')
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');

    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('copylib', ['clean:lib', 'copy:lib']);
    grunt.registerTask('build', ['clean:dist', 'less']);
    grunt.registerTask('builddemo', [
        'clean:memory',
        'copy:memory',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);
};
