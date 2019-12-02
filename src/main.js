import Vue from 'vue'
import App from './App'
import router from './router'
// 引入全局css
import global from './assets/global.css'

// 引入element
import ElementUI from 'element-ui'
// 引入axios并配置
import axios from 'axios'

// 请求根地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/login'

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
