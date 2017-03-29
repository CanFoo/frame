import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Counter from './counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/counter',
      component: Counter
    }
  ]
})
