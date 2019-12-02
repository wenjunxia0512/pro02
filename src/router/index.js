import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'
 

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Home',component: Home},
    { path: '/login',component: Login},
  ]
})
