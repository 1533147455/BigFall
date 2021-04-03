

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';





import http from '@/api/config.js'
import './mock'

router.beforeEach((to,from,next) => {
  store.commit('getToken')
  store.commit('getMenu')
  let token = store.state.user.token
  if(!token && to.name !== 'login') {
    next({name:'login'})
  } else {
    next()
  }
})

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')