'use strict';

module.exports = {
    options: {
        //separator: ';',
        process: function (src, filepath) {
            var RE_JS = /\.js$/;
            if (RE_JS.test(filepath)) {
                src += ';';
            }

            return src;
        }
    }
};
