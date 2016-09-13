//先清空 n-build 文件夹下的文件
var fs = require('fs'),buildPath='./build/';
var folder_exists = fs.existsSync(buildPath);
if(folder_exists == true)
{
   var dirList = fs.readdirSync(buildPath);
   dirList.forEach(function(fileName)
   {
       fs.unlinkSync(buildPath + fileName);
   });
   console.log("clearing " + buildPath);
};

//readfile
//先把index.html里面关于style和js的hash值都删除掉，避免在使用 npm run dev 的时候，路径还是压缩后的路劲
fs.readFile("index.html",'utf-8',function(err,data){
    if(err){
        console.log("error");
    }else{
      //将index.html里面的hash值清除掉
      var devhtml = data.replace(/((?:href|src)="[^"]+\.)(\w{20}\.)(js|css)/g, '$1$3');
      fs.writeFileSync('index.html', devhtml);
    }
});

var webpack = require('webpack');

//var vue = require("vue-loader");

//混淆压缩
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//检测重用模块
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//独立样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");



// 在命令行 输入  “PRODUCTION=1 webpack --progress” 就会打包压缩，并且注入md5戳 到 index.html里面
var production = process.env.PRODUCTION;

var plugins = [
  //会将所有的样式文件打包成一个单独的style.css
  new ExtractTextPlugin( production ? "style.[hash].css" : "style.css" , {
    disable: false//,
    //allChunks: true  //所有独立样式打包成一个css文件
  }),
  //new ExtractTextPlugin("[name].css" )
  //自动分析重用的模块并且打包成单独的文件
  new CommonsChunkPlugin(production ? "vendor.[hash].js" : "vendor.js" ),
  function(){
      return this.plugin('done', function(stats) {
        var content;
        //这里可以拿到hash值
        content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
        console.log('版本是：'+JSON.stringify(stats.toJson().hash));
        //return fs.writeFileSync('build/assets.json', content);
      });
  }
];

//发布编译时，压缩，版本控制
if (process.env.PRODUCTION) {
  //压缩
  plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {warnings: false } }));
}

/*
  "html-webpack-plugin": "^1.6.2",
  模块是把生成的带有md5戳的文件，插入到index.html中。
  通过index.tpl模板，生成 index.html
 */
var HtmlWebpackPlugin = require("html-webpack-plugin");
plugins.push( new HtmlWebpackPlugin({
  filename:'../index.html',//会生成index.html在根目录下,并注入脚本
  template:'index.tpl',
  inject:true
}));


module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: "./build",
        publicPath: "/build/",
        filename: production ? "build.[hash].js" : "build.js"
    },
    module: {
        preLoaders:[
            // {
            //     //代码检查
            //     test:/\.js$/,exclude:/node_modules/,loader:'jshint-loader'
            // }
        ],
        loaders: [
            {
              test: /\.vue$/,
              loader: 'vue'
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!cssnext-loader")},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}, // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            {test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf$/,    loader: "file"},
            {test: /\.eot$/,    loader: "file"},
            {test: /\.svg$/,    loader: "file"}
       ]
    },
    vue:{
      css:ExtractTextPlugin.extract("style-loader",
                  "css-loader?sourceMap!cssnext-loader")

    },
    plugins : plugins,
    devtool: 'source-map'//,
    // resolve: {
    //     extensions: ['', '.js', '.json', '.coffee','vue']
    // }
};


