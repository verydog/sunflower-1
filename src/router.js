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
          name: 'quickstart',
          component: () => import('./views/comp/quickstart.vue')
        },
        {
          path: 'swiper-layout',
          name: 'swiper-layout',
          component: () => import('./views/comp/swiper-layout.vue')
        },
        {
          path: 'markdown',
          name: 'markdown',
          component: () => import('./views/comp/markdown.vue')
        }
      ]
    },
    {
      path: '/view/swiper-layout-view',
      name: 'swiper-layout-view',
      component: () => import('./views/comp/swiper-layout-view.vue')
    }
  ]
})
