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
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/Blog.vue'),
        meta: { title: '博客' }
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
        meta: { title: '资源' },
        children: [
          {
            path: '/page1',
            name: 'page1',
            component: () => import('@/views/Others/Page1.vue'),
            meta: { title: '浮浮沉沉' }
          },
          {
            path: '/page2',
            name: 'page2',
            component: () => import('@/views/Others/Page2.vue'),
            meta: { title: '起起落落' }
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
