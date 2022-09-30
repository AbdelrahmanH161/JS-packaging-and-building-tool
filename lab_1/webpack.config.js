const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    "mode":'development' , 
    entry: '/assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }] 
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: './index.html',
        inject:"body"
    })],
        devServer: {     
        compress: true,
        port: 4000,
        },
}