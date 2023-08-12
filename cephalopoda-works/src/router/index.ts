import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePlace from '../views/HomePlace.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePlace
  },
  { 
    path: '/ikeda',
    name: 'ikeda',
    component: () => import('@/views/IkedaContents.vue'),
  },
  {
    path: '/kopa',
    name: 'kopa',
    component: () => import('@/views/KopaContents.vue'),
  },
  {
    path: '/sugimoto',
    name: 'sugimoto',
    component: () => import('../views/SugimotoContents.vue'),
  },
  {
    path: '/cephalopoda',
    name: 'cephalopoda',
    component: () => import('@/views/CephalopodaKnowledge.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/CephalopodaGallery.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/UpdateHistory.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
