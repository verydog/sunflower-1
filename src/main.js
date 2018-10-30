import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Sunflower from '../packages/index'

Vue.use(Sunflower)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
