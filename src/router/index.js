import { createRouter, createWebHistory } from 'vue-router'
import AppContent from '../views/AppContent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppContent
  },
  {
    path: '/about',
    name: 'conten',
    component: () => import( '../views/AppContent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
