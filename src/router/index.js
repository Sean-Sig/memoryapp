import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TablePage from '@/components/TablePage'
import SearchPage from '@/components/SearchPage'

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
      name: 'TablePage',
      component: TablePage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    }
  ]
})

export default router
