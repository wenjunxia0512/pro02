import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全局css
import global from './assets/global.css'
// 引入“图标”css样式文件
import './assets/fonts/iconfont.css'

// 引入element
import ElementUI from 'element-ui'
// 引入axios并配置
import axios from 'axios'

// 请求根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

axios.interceptors.request.use
(function (config) {
   var token = window.sessionStorage.getItem('token')
  //  console.log(token)
   config.headers.Authorization = token
   return config
   
}, function (error) {
 
  return Promise.reject(error);
});

// 把axios配置给vue
Vue.prototype.$http = axios

Vue.use(ElementUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
