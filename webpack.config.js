var path = require('path');

module.exports = {
    entry: {
        app: './src/script.ts'
    },
    output: {
        filename: './dist/app.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    }
};