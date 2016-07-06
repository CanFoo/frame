
//将css文件加载进来，不需要引用到html文件中
require("../css/style.css");
var Vue = require("vue");

new Vue({
    el: '#app',
    data: {
        message: 'hello world!',
        todos: [
	      { text: 'Learn JavaScript' },
	      { text: 'Learn Vue.js' },
	      { text: 'Build Something Awesome' }
	    ]
    }
})


