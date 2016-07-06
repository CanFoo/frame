//将css文件加载进来，不需要引用到html文件中
require("../css/style.css");
require("../css/about.css");

var a = require('./a.js'); 
var b = require('./b.js'); 

document.write('<h1>' + a.add(b[0], b[1]) + '</h1>');