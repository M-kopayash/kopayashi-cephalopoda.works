import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/ikeda',
    name: 'ikeda',
    component: () => import('@/views/IkedaView.vue'),
  },
  {
    path: '/kopa',
    name: 'kopa',
    component: () => import('@/views/KopaView.vue'),
  },
  {
    path: '/sugimoto',
    name: 'sugimoto',
    component: () => import('../views/SugimotoView.vue'),
  },
  {
    path: '/cephalopoda',
    name: 'cephalopoda',
    component: () => import('@/components/CephalopodaComponent.vue'),
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('@/views/GalleryView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/components/HistoryComponent.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
