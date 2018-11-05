import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Sunflower from '../packages/index'
import SunFooter from './components/sun-footer'

Vue.use(Sunflower)
Vue.component(SunFooter.name, SunFooter)

Vue.prototype.domain = 'http://192.168.70.41:8080'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
