var grunt = require('grunt'),
    path = require('path');

module.exports = {
    normal: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: '**/cut.less',
            dest: 'dist/',
            filter: 'isFile',
            rename: function (dest, src, options) {
                src = src.replace('less/', 'css/');
                src = src.replace(/\.less$/, '.css');
                return path.join(dest, src);
            }
        }],
        options: {
            compress: true
        }
    }
};
