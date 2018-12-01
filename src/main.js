import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'
import AddMemory from '@/components/memory/AddMemory'
import Memories from '@/components/memory/MemoryTable'

Vue.use(Buefy)

Vue.config.productionTip = false

Vue.component('AddMemory', AddMemory)
Vue.component('Memories', Memories)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
