'use strict';

module.exports = {
    options: {
        skipUrlsLargerThan: '5 MB'
    },
    memory: {
        files: [{
            expand: true,
            cwd: 'demo/memory/dist',
            src: ['main*.css'],   // Actual patterns to match
            dest: 'demo/memory/dist'
        }]
    }
};
