const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	entry: {
		canvasDraw: './src/canvasDraw/canvasDraw.js',
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			title: 'Learning Functional Reactive Programming',
			filename: './dist/index.html',
			template: './src/assets/template.html',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
