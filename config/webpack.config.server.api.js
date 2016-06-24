var path = require('path');
var config = require('./webpack.config.server');

config.entry = [
    path.resolve(__dirname, '../external/api.js')
]

config.output = {
    path: path.resolve(__dirname, '../external'),
    filename: 'server.api.build.js'
}

module.exports = config;
