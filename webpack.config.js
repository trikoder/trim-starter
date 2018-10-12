const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

    mode: isProduction ? 'production' : 'development',

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/build.js',
        publicPath: '/dist/',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './node_modules/@trikoder/trim/src/scss/library/_all.scss',
                                './src/scss/_variables.scss'
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [
                    path.join(__dirname, 'src')
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules/@trikoder/trim/src')
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },

    resolve: {

        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'cmf': '@trikoder/trim/src'
        },

        extensions: ['*', '.js', '.vue', '.json']

    },

    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },

    performance: {
        hints: false
    },

    plugins: [

        new VueLoaderPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                BASE_URL: JSON.stringify(process.env.BASE_URL),
                BASE_API_URL: JSON.stringify(process.env.BASE_API_URL),
                ASSET_PATH: JSON.stringify('/dist/'),
                NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')
            }
        })

    ]

};
