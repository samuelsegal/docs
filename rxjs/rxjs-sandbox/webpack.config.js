const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		domDraw: './src/domDraw/domDraw.js',
		friendSuggestion: './src/friendSuggestion/friendSuggestion.js',
		introduction: './src/introduction/introduction.js',
		coldObservables: './src/introduction/coldObservables.js',
		hotObservables: './src/introduction/hotObservables.js',
		creationFunctions: './src/introduction/creationFunctions.js',
		tempConverter: './src/introduction/tempConverter.js',
		filter: './src/introduction/pipeable/filter.js',
		debounceTime: './src/introduction/pipeable/debounce.js',
		operators: './src/introduction/pipeable/operators.js',
		fetchEndpoint: './src/introduction/pipeable/fetchEndpoint.js',
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
