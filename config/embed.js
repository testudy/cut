'use strict';

module.exports = {
    memory: {
        options: {
            skipUrlsLargerThan: '5 MB'
        },

        files: [{
            expand: true,
            cwd: 'demo/memory/dist',
            src: ['*.css'],   // Actual patterns to match
            dest: 'demo/memory/dist'
        }]
    }
};
