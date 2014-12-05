module.exports = function (grunt) {
    'use strict';

    var config = require('./config/config'),
        fs = require('fs');

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
    grunt.registerTask('buildsrc', ['clean:dist', 'less']);

    grunt.registerTask('build', 'test desc', function (project) {
        if (!fs.existsSync(config.getPath(project))) {
            console.log('编译的' + project + '项目不存在');
            return;
        }

        console.log('Build ' + project + ' project start!');

        grunt.config.set('clean.' + project, config.createClean(project));
        grunt.config.set('copy.' + project, config.createCopy(project));
        grunt.config.set('useminPrepare', config.createUseminPrepare(project));
        grunt.config.set('cssUrlRewrite.' + project, config.createRewrite(project));
        grunt.config.set('filerev', config.createFilerev(project));
        grunt.config.set('usemin', config.createUsemin(project));
        grunt.config.set('imagemin.' + project, config.createImagemin(project));
        grunt.config.set('cssUrlEmbed.' + project, config.createEmbed(project));

        grunt.task.run([
            'clean:' + project,
            'copy:' + project,
            'useminPrepare',
            'concat:generated',
            'cssmin:generated',
            'uglify:generated',
            'cssUrlRewrite:' + project,
            'filerev',
            'usemin',
            //'svgmin',
            'imagemin:' + project,
            'cssUrlEmbed:' + project
        ]);
    });

    grunt.registerTask('clear', 'test desc', function (project) {
        if (!fs.existsSync(config.getPath(project))) {
            console.log('清理冗余的' + project + '项目不存在');
            return;
        }
        console.log('clear start');
        grunt.config.set('clean.' + project + '-clear', config.createClear(project));
        console.log(grunt.config.get('clean.' + project + '-clear'));
        grunt.task.run([
            'clean:' + project + '-clear'
        ]);
        console.log('clear end');
    });
};
