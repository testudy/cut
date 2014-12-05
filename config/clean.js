'use strict';

module.exports = {
    lib: {
        src: ['lib/**/*']
    },

    dist: {
        src: ['dist/**/*']
    },

    memory: {
        src: ['demo/memory/dist/**/*']
    },
    'memory-clean': {
        src: ['demo/memory/dist/img/*.{png,jpg,gif,svg}', 'demo/memory/dist/memory.*.css']
    }
};
