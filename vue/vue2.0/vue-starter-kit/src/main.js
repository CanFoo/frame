// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'
import App from './App'

FastClick.attach(document.body)
Vue.use(vueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
const vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
export default vueInstance
