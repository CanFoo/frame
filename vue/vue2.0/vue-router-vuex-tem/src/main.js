import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import store from './store'

import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import 'assets/css/common.css'

import Home from './views/Home'
import Foo from './views/Foo'
import Bar from './views/Bar'
import App from './App'
import NotFound from './components/404'


Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/foo',
  component : Foo
},{
  path : '/bar',
  component : Bar
},{
  path : '*',
  component : NotFound
}];

const router = new VueRouter({
  // mode: 'history',  history模式
  routes
});

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
