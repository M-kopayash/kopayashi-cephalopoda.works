import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/ikeda',
    name: 'ikeda',
    component: () => import('@/views/Ikeda.vue'),
  },
  {
    path: '/kopa',
    name: 'kopa',
    component: () => import('@/views/Kopa.vue'),
  },
  {
    path: '/sugimoto',
    name: 'sugimoto',
    component: () => import('../views/Sugimoto.vue'),
  },
  {
    path: '/cephalopoda',
    name: 'cephalopoda',
    component: () => import('@/views/Cephalopoda.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/Gallery.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
