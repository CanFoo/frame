const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './router.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    },
    { test: /\.less$/, 
      loader: "style!css!less"
    },
    {
      test: /\.(woff|woff2)$/,
      loader: "url?prefix=font/&limit=5000"
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    },
    {
      test: /\.gif/,
      loader: "url-loader?limit=10000&mimetype=image/gif"
    },
    {
      test: /\.jpg/,
      loader: "url-loader?limit=10000&mimetype=image/jpg"
    },
    {
      test: /\.png/,
      loader: "url-loader?limit=10000&mimetype=image/png"
    }]
  },
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('style.css', {allChunks: true}),
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	  }),
    new CopyWebpackPlugin([
          {from: './index.html'}
    ])
	]
}
