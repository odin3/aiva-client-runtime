var path = require('path');

module.exports = {
    entry: {
        app: './src/script.tsx'
    },
    output: {
        filename: './dist/app.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    }
};