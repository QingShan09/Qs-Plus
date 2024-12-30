import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'Home',
    meta: { title: '首页' }
  },
  {
    path: '/guide',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/guide/index.vue'),
        name: 'Guide',
        meta: { title: '指南' }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/button',
    children: [
      {
        path: 'button',
        component: () => import('@/views/components/button.vue'),
        name: 'Button',
        meta: { title: 'Button 按钮' }
      },
      {
        path: 'icon',
        component: () => import('@/views/components/icon.vue'),
        name: 'Icon',
        meta: { title: 'Icon 图标' }
      },
      {
        path: 'input',
        component: () => import('@/views/components/input.vue'),
        name: 'Input',
        meta: { title: 'Input 输入框' }
      },
      {
        path: 'radio',
        component: () => import('@/views/components/radio.vue'),
        name: 'Radio',
        meta: { title: 'Radio 单选框' }
      },
      {
        path: 'checkbox',
        component: () => import('@/views/components/checkbox.vue'),
        name: 'Checkbox',
        meta: { title: 'Checkbox 多选框' }
      },
      {
        path: 'switch',
        component: () => import('@/views/components/switch.vue'),
        name: 'Switch',
        meta: { title: 'Switch 开关' }
      },
      {
        path: 'select',
        component: () => import('@/views/components/select.vue'),
        name: 'Select',
        meta: { title: 'Select 选择器' }
      },
      {
        path: 'message',
        component: () => import('@/views/components/message.vue'),
        name: 'Message',
        meta: { title: 'Message 消息提示' }
      },
      // {
      //   path: 'table',
      //   component: () => import('@/views/components/table.vue'),
      //   name: 'Table',
      //   meta: { title: 'Table 表格' }
      // }
    ]
  },
  {
    path: '/resource',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/resource/index.vue'),
        name: 'Resource',
        meta: { title: '资源' }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
}) 