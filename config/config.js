'use strict';

module.exports = {
    getPath: function (project) {
        return 'project/' + project;
    },

    createClean: function (project) {
        return {
            src: ['project/' + project + '/dist/**/*']
        };
    },

    createClear: function (project) {
        return {
            src: ['project/' + project + '/dist/img/*.{png,jpg,gif,svg}', 'project/' + project + '/dist/' + project + '.*.css']
        };
    },

    createCopy: function (project) {
        return {
            files: [{
                expand: true,
                cwd: 'project/' + project + '/app/',
                src: ['**/*'],
                dest: 'project/' + project + '/dist/',
                filter: 'isFile'
            }]
        };
    },

    createUseminPrepare: function (project) {
        return {
            html: 'project/' + project + '/dist/index.html',
            options: {
                //root: 'project/' + project + '/dist',
                dest: 'project/' + project + '/dist'
            }
        };
    },

    createRewrite: function (project) {
        return {
            expand: true,
            cwd: 'project/' + project + '/dist/',
            src: ['**/*.css'],
            dest: 'project/' + project + '/dist/',
            ext: '.android.css',
            filter: 'isFile',
            options: {
                skipExternal: true,
                basePath: 'project/' + project + '/dist/',
                rewriteUrl: function(url, options, dataURI) {
                    var svgRE = /\.svg$/;
                    if (svgRE.test(url)) {
                        url = url.substr(0, url.length - 3) + 'android.png';
                        console.log(url);
                    }
 
                    url = url.substr(options.basePath.length);
 
                    return url;
                }
            }
        };
    },

    createFilerev: function (project) {
        return {
            options: {
                algorithm: 'md5',
                length: 8
            },
            images: {
                src: 'project/' + project + '/dist/**/*.{js,css}',
                //dest: 'project/' + project + '/dist/'
            }
        };
    },

    createUsemin: function (project) {
        return {
            html: 'project/' + project + '/dist/index.html',
            options: {
                //dest: 'project/' + project + '/dist/index.html',
                //assetsDirs: ['project/' + project + '/dist']
            }
        };
    },

    createImagemin: function (project) {
        return {
            options: {                       // Target options
                optimizationLevel: 3,
                //svgoPlugins: [{ removeViewBox: false }],
                //use: [mozjpeg()]
            },
            files: [{
                expand: true,
                cwd: 'project/' + project + '/app/img',
                src: ['*.{png,jpg,gif}'],   // Actual patterns to match
                dest: 'project/' + project + '/dist/img'
            }]
        };
    },

    createEmbed: function (project) {
        return {
            files: [{
                expand: true,
                cwd: 'project/' + project + '/dist',
                src: ['main*.css'],   // Actual patterns to match
                dest: 'project/' + project + '/dist'
            }]
        };
    }
};
