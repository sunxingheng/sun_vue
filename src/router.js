import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './views/home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: 'HelloWorld',name: 'HelloWorld',component: HelloWorld},
    { name: 'home', path: '/home', component: home },
    { path: '*', redirect: '/home' }
  ]
})
