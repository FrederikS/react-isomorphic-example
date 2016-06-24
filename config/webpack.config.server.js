var path = require('path');
var webpack = require('webpack');
var nodeExternals = require("webpack-node-externals");

module.exports = {
    target: 'node',
    cache: false,
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '../src/main/server/server.js')
    ],
    devtool: 'inline-source-map',
    output: {
        filename: 'server.build.js'
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, loader: 'eslint', exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.json$/, loaders: ['json'] },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /\.global\.css$/,
                loaders: [
                    'isomorphic-style-loader',
                    'css-loader?modules&camelCase'
                ]
            },
            { test: /\.global\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        })
    ],
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    node: {
        __dirname: true
    }
};
