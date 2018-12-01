import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import MemoriesPage from '@/components/MemoriesPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/memories',
      name: 'Memories',
      component: MemoriesPage
    }
  ]
})

export default router
