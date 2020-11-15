import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/resume',
        name: 'resume',
        component: () => import('@/views/Resume.vue'),
        meta: { title: '简历' }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/others',
        name: 'others',
        component: () => import('@/views/Others/Page1.vue'),
        meta: { title: '其它' },
        children: [
          {
            path: '/page1',
            name: 'page1',
            component: () => import('@/views/Others/Page1.vue'),
            meta: { title: '笔记列表' }
          },
          {
            path: '/page2',
            name: 'page2',
            component: () => import('@/views/Others/Page2.vue'),
            meta: { title: '写笔记' }
          }
        ]
      }
      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
