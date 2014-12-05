'use strict';

module.exports = {
    memory: {
        expand: true,
        cwd: 'demo/memory/dist/',
        src: ['**/*.css'],
        dest: 'demo/memory/dist/',
        ext: '.android.css',
        filter: 'isFile',
        options: {
            skipExternal: true,
            basePath: 'demo/memory/dist/',
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
    }
};
