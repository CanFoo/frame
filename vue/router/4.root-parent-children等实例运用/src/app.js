
// require('./css/common.css');//加载公共样式
// require('./css/animate.css');//加载公共样式

var Vue = require('vue');
var VueTouch = require('./vtouch');
var VueRouter = require('vue-router');
var fastclick = require('fastclick');
fastclick.attach(document.body);


/* 声明一个vue实例 */
var App = Vue.extend(require('./app.vue'));

Vue.use(VueTouch);
Vue.use(VueRouter);

var router = new VueRouter(
	{
		hashbang: true,  //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
		linkActiveClass:'custom-active-class' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
	}
);

require('./routers')(router);

router.start(App,'#app');