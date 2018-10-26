import Vue from 'vue'
import App from './App.vue'

import {
  SunSwiperLayoutItem,
  SunSwiperLayout
} from '../packages/index'

Vue.use(SunSwiperLayoutItem)
Vue.use(SunSwiperLayout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
