var path = require('path');

module.exports = {
    entry: {
        app: './src/script.ts'
    },
    output: {
        filename: './dist/script.js'
    },
    resolve: {
        root: [
            path.resolve('./src/modules'),
            path.resolve('node_modules')
        ],
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader!preprocessor?file&config=preprocess-ts.json'
        }]
    }
};