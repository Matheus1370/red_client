import { createRouter, createWebHistory } from 'vue-router'
import ClientView from '@/views/client/ClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClientView,
    },
  ],
})

export default router
