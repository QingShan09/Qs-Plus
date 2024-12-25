import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue'),
    name: 'Home',
    meta: { title: '首页' }
  },
  {
    path: '/guide',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/guide/index.vue'),
        name: 'Guide',
        meta: { title: '指南' }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    children: [
      {
        path: '',
        redirect: '/components/button'
      },
      {
        path: 'button',
        component: () => import('../views/components/button.vue'),
        name: 'Button',
        meta: { title: 'Button 按钮' }
      },
      {
        path: 'radio',
        component: () => import('../views/components/radio.vue'),
        name: 'Radio',
        meta: { title: 'Radio 单选框' }
      }
      // 其他组件路由将在组件开发完成后添加
    ]
  },
  {
    path: '/resource',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/resource/index.vue'),
        name: 'Resource',
        meta: { title: '资源' }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
}) 