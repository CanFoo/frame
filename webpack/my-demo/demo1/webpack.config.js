module.exports = {
	//页面入口文件配置
	entry: {
		app: './js/app.js'
	},

	//入口文件输出配置
	output: {
		path: './output',
		filename: '[name].bunble.js'
	},

	module: {
		//加载器配置
        loaders: [
        	//.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: "style!css" },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //样式中的图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
}