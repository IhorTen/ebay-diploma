const path = require('path');

module.exports = {
    entry: "./src/js/index",
    output: {
        filename: "build.js"
    },
    devServer: {
        open: true,
        contentBase: './dist'
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};