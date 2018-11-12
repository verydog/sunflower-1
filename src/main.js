import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Sunflower from '../packages/index'
import SunFooter from './components/sun-footer'

Vue.use(Sunflower)
Vue.component(SunFooter.name, SunFooter)

Vue.prototype.domain = 'http://192.168.70.41:8080'

router.beforeEach((to, from, next)=>{

  store.commit('nowStatus', 'loading')

  document.title = to.meta.title

  next();

})

router.afterEach((to, from, next)=>{
  store.commit('nowStatus', 'end')

  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)

  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
