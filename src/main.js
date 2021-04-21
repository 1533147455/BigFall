

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import '@/assets/scss/common.scss'
Vue.prototype.$echarts = echarts

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'medium' })

import format from '@/assets/js/format.js';
Vue.prototype.$format = format

// 全局注册公共组件
// import kebabCase from 'lodash/kebabCase'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // 其组件目录的相对路径
    './components/common',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // const componentName = kebabCase(
  //         // 获取和目录深度无关的文件名
  //         fileName
  //             .split('/')
  //             .pop()
  //             .replace(/\.\w+$/, '')
  //         )
  const componentName = upperFirst(
      camelCase(
          // 获取和目录深度无关的文件名
          fileName
              .split('/')
              .pop()
              .replace(/\.\w+$/, '')
      )
  )
  // 全局注册组件
  Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
  )
})

import http from '@/api/config.js'
Vue.prototype.$http = http
import './mock'

router.beforeEach((to,from,next) => {
  store.commit('getToken')
  // store.commit('getMenu')
  let token = store.state.user.token
  if(!token && to.name !== 'login') {
    next({name:'login'})
  } else {
    next()
  }
})

// Vue.config.productionTip = false





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
