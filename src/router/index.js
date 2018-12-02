import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import TablePage from '@/components/TablePage'
import SearchPage from '@/components/SearchPage'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
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
    },
    {
      path: '/add',
      name: 'HomePage',
      component: HomePage
    }
  ]
})

export default router
