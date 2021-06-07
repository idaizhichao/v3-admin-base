import { createRouter, RouteRecordRaw, createWebHistory }  from 'vue-router'

import baseLayout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('@/components/HelloWorld.vue')
  },
  {
    path: '/layout',
    name: 'home',
    component: baseLayout,
    children: [
      {
        path: 'list',
        name: 'list',
        component: ()=> import('@/views/list/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'zs',
    component: ()=> import('@/views/login/index.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router