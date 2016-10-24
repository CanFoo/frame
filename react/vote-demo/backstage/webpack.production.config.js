const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var fs = require('fs');
var cssUrl = '../public/stylesheets/bs.css';
var folder_exists = fs.existsSync(cssUrl);
if(folder_exists == true)
{
   fs.unlinkSync(cssUrl);
};

module.exports = {
  entry: [
    './router.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, '../public/javascripts'),
    // path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
      extensions: ['', '.js']
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
    { test: /\.(png|jpg)$/, 
      loader: 'file?name=../../public/images/[hash:8].[name].[ext]'
      // loader: 'url?limit=8192&name=images/[hash:8].[name].[ext]'
    }]
  },
	plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('../../public/stylesheets/bs.css', {allChunks: true}),
    // new ExtractTextPlugin('style/bs.css', {allChunks: true}),
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
