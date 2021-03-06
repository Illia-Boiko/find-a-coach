import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
