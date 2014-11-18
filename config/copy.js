'use strict';

var path = require('path');

module.exports = {
    lib: {
        files: [{
            expand: true,
            cwd: 'bower_components/normalize.css/',
            src: ['*.css'],
            dest: 'lib/normalize/',
            filter: 'isFile'
        }, {
            expand: true,
            cwd: 'bower_components/animate.css/',
            src: ['*.css'],
            dest: 'lib/animate/',
            filter: 'isFile'
        }, {
            expand: true,
            cwd: 'bower_components/',
            src: ['zepto/*.js'],
            dest: 'lib/',
            filter: 'isFile'
        }, {
            expand: false,
            src: ['bower_components/zepto-src/src/touch.js'],
            dest: 'lib/zepto/touch.js',
            filter: 'isFile'
        }, {
            expand: false,
            src: ['bower_components/zepto-src/src/data.js'],
            dest: 'lib/zepto/data.js',
            filter: 'isFile'
        }]
    },

    memory: {
        files: [{
            expand: true,
            cwd: 'demo/memory/app/',
            src: ['**/*'],
            dest: 'demo/memory/dist/',
            filter: 'isFile'
        }]
    }
};
