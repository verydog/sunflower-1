import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('./views/components.vue'),
      redirect: '/components/quickstart',
      children: [
        {
          path: 'quickstart',
          name: 'components-quickstart',
          component: () => import('./views/comp/quickstart.vue')
        }
      ]
    }
  ]
})
