'use strict';

var path = require('path');

module.exports = {
    lib: {
        files: [{
            expand: true,
            cwd: 'bower_components/',
            src: ['normalize.css/*.css'],
            dest: 'lib/normalize/',
            filter: 'isFile'
        }, {
            expand: true,
            cwd: 'bower_components/',
            src: ['zepto/*.js'],
            dest: 'lib/',
            filter: 'isFile'
        }]
    }
};
