import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

const constantRoutes:RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Layout/index.vue'),
    children: []
  }, {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router
