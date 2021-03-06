/* eslint-disable */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: "./build", 
        port: 3000,
        proxy: { // 联调中跨域问题解决
            '/vote/index/data': {
                changeOrigin: true,
                target: 'http://localhost:8080',
                secure: false,
            },
            '/manage/text': {
                changeOrigin: true,
                target: 'http://localhost:8080',
                secure: false,
            },
            '/vote/register/data': {
                changeOrigin: true,
                target: 'http://localhost:8080',
                secure: false,
            }
        }
    },
  entry: [
      path.resolve(__dirname, 'router.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
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
      // loader: 'style-loader!css-loader'
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
    new ExtractTextPlugin("style.css")
  ]
}


