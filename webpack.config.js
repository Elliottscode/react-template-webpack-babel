const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.bundle.js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3010,
        static: './dist',
        historyApiFallback: true,
        
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                    'sass-loader'   
                ],
            },
            {
                test: /\.(png|jpg|svg|webp|ico)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin(), new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({filename:"/dist", favicon:"./src/favicon.ico"})]
};