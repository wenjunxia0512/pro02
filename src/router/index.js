import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'
import Welcome from '@/components/Welcome'

 

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Home',component: Home,redirect:'/Welcome',children:[
      {path:'/Welcome',component:Welcome}
    ]},
    { path: '/login',component: Login },
  ]
})
