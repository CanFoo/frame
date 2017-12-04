import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Decorator from '@/components/Decorator';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/decorator',
            name: 'Decorator',
            component: Decorator
        }
    ]
})
