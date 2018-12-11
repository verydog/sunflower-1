import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Sunflower from '../packages/index'
import SunFooter from './components/sun-footer'

Vue.use(Sunflower)
Vue.component(SunFooter.name, SunFooter)

Vue.prototype.domain = 'https://www.verydog.cn'
router.beforeEach((to, from, next)=>{

  store.commit('nowStatus', 'loading')

  document.title = to.meta.title

  next();

})

router.afterEach(()=>{
  store.commit('nowStatus', 'end')

  setTimeout(()=>{
    store.commit('nowStatus', 'hide')
  }, 900)

  setTimeout(()=>{
    store.commit('nowStatus', 'normal')
  }, 1000)

  document.documentElement.scrollTop = document.body.scrollTop = 0

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
