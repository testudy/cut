'use strict';

//var mozjpeg = require('imagemin-mozjpeg');

module.exports = {
    memory: {
        options: {                       // Target options
            optimizationLevel: 3,
            //svgoPlugins: [{ removeViewBox: false }],
            //use: [mozjpeg()]
        },
        files: [{
            expand: true,
            cwd: 'demo/memory/app/img',
            src: ['*.{png,jpg,gif}'],   // Actual patterns to match
            dest: 'demo/memory/dist/img'
        }]
    }
};
