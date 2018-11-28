import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@core/ui': path.resolve(__dirname, 'src')
		}
	},
	devServer: {
		contentBase: path.join(__dirname, 'build')
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			include: /src/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}, 
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(ttf|png|jpg|gif|svg|eot|woff|woff2)$/,
			use: [
				{
					loader: 'file-loader',
					options: {}
				}
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Truend',
			template: path.resolve(__dirname, './src/index.html'),
		}),
	],
}
