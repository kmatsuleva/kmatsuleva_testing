const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		calculator: './src/calculator.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Tests'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
