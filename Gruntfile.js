module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: require('./config/clean'),
        copy: require('./config/copy'),
        concat: require('./config/concat'),
        cssmin: require('./config/cssmin'),
        less: require('./config/less'),
        useminPrepare: require('./config/useminPrepare'),
        filerev: require('./config/filerev'),
        usemin: require('./config/usemin'),
        svgmin: require('./config/svgmin'),
        imagemin: require('./config/imagemin'),
        cssUrlEmbed: require('./config/embed'),
        cssUrlRewrite: require('./config/rewrite.js')
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');

    grunt.loadNpmTasks('grunt-usemin');

    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-css-url-embed');
    grunt.loadNpmTasks('grunt-css-url-rewrite');

    grunt.registerTask('copylib', ['clean:lib', 'copy:lib']);
    grunt.registerTask('build', ['clean:dist', 'less']);
    grunt.registerTask('builddemo', [
        'clean:memory',
        'copy:memory',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'cssUrlRewrite:memory',
        'filerev',
        'usemin',
        //'svgmin',
        'imagemin',
        'cssUrlEmbed:memory',
        'clean:memory-clean'
    ]);
};
