const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './dev/app.js',
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        port: 3030,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: ["last 2 versions"]
                            },
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                          }
                    },

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dashboard',
            template: './dev/index.hbs',
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: false,
            },
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name]-style.css'
        })
    ]
};