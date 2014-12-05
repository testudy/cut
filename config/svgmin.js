'use strict';

module.exports = {
    memory: {
        options: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    removeEmptyAttrs: false
                }, {
                    removeHiddenElems: false
                }, {
                    mergePaths: false
                }, {
                    collapseGroups: false
                }, {
                    cleanupIDs: false
                }, {
                    removeEmptyContainers: false
                }, {
                    removeDoctype: false
                }, {
                    removeMetadata: false
                }, {
                    removeXMLProcInst: false
                }
            ]
        },
        files: [{
            expand: true,
            cwd: 'project/memory/app/img',
            src: '*.svg',
            dest: 'project/memory/dist/img',
            //filter: 'isFile'
        }]
    }
};
