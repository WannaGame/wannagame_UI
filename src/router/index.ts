import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth/discord',
    name: 'Authenticating with Discord',
    component: () => import('../views/Discord.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
