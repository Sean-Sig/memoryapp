import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import AddMemory from '@/components/memory/AddMemory'
import ViewMemory from '@/components/memory/ViewMemory'
import SearchMemory from '@/components/memory/SearchMemory'
import LoginMemory from '@/components/memory/LoginMemory'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.component('AddMemory', AddMemory)
Vue.component('ViewMemory', ViewMemory)
Vue.component('SearchMemory', SearchMemory)
Vue.component('LoginMemory', LoginMemory)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
