var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared');

module.exports = {
    context: path.resolve('js'),
    entry: {
        about: './about.js',
        contact: './contact.js',
        home: './home.js'
    },
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/',
        filename: "[name].js"
    },

    plugins: [commonsPlugin],
    watch: true,

    devServer: {
        contentBase: 'public'
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: 'pre'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}