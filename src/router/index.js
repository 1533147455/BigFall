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
        meta: { title: '笔记' }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/resume',
        name: 'resume',
        component: () => import('@/views/Resume.vue'),
        meta: { title: '简历' }
      },
      {
        path: '/others',
        name: 'others',
        // component: () => import('@/views/Main.vue'),
        component: () => import('@/App.vue'),
        meta: { title: '资源' },
        children: [
          {
            path: 'page1',
            name: 'page1',
            component: () => import('@/views/Others/Page1'),
            meta: { title: '浮浮沉沉' }
          },
          {
            path: 'page2',
            name: 'page2',
            component: () => import('@/views/Others/Page2'),
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
  },
  // {
  //   path: '/others/page1',
  //   name: 'page11',
  //   component: () => import('@/views/Others/Page1'),
  //     meta: { title: '浮浮沉沉' }
  // },
  // {
  //   path: '/others/page2',
  //   name: 'page22',
  //   component: () => import('@/views/Others/Page2'),
  //   meta: { title: '起起落落' }
  // }
]

const router = new VueRouter({
  routes
})

export default router
