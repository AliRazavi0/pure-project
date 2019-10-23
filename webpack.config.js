const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const  HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: __dirname + "/src/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index:"index.html",
        port: 8888
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test : /\.(woff|woff2|ttf|eot|otf)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            publicPath : 'fonts',
                            outputPath : 'fonts',
                            name : '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env"]
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            title: "Ali App",
            filename:"index.html",
            template: "src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
};