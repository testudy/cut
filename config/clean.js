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
        src: ['demo/memory/dist/img', 'demo/memory/dist/memory.*.css']
    }
};
