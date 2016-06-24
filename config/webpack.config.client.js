var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '../src/main/client/app.js')
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        filename: 'bundle.js'
    },
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
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         // This has effect on the react lib size
        //         'NODE_ENV': JSON.stringify('production'),
        //     }
        // })
    ],
    eslint: {
        failOnWarning: false,
        failOnError: true
    }
};
