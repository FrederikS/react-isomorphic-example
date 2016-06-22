const WebpackShellPlugin = require('webpack-shell-plugin');
var baseConfig = require("./webpack.config.server");

baseConfig.plugins.push(new WebpackShellPlugin({
	onBuildEnd: ['node server.build.js']
}));

module.exports = baseConfig;
