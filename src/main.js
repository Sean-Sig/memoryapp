import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import AddMemory from '@/components/memory/AddMemory'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.component('AddMemory', AddMemory)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
