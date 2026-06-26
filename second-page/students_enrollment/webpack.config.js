const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/students-enrollment.js',
    output: {
        filename: 'students-enrollment.js',
        path: path.resolve(__dirname, 'dist/js'),
        clean: false
    }
};