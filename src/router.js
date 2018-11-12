import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      redirect: '/welcome',
      meta: {
        title: 'Sunflower'
      },
      children:[
        {
          path: 'welcome',
          name: 'welcome',
          component: () => import('./views/welcome.vue'),
          meta: {
            title: 'Sunflower'
          }
        },
        {
          path: 'components',
          name: 'components',
          component: () => import('./views/components.vue'),
          redirect: '/components/quickstart',
          children: [
            {
              path: 'quickstart',
              name: 'quickstart',
              component: () => import('./views/comp/quickstart.vue'),
              meta: {
                title: '快速上手'
              }
            },
            {
              path: 'swiper-layout',
              name: 'swiper-layout',
              component: () => import('./views/comp/swiper-layout.vue'),
              meta: {
                title: 'swiper-layout'
              }
            },
            {
              path: 'markdown',
              name: 'markdown',
              component: () => import('./views/comp/markdown.vue'),
              meta: {
                title: 'markdown'
              }
            },
            {
              path: 'qrcode',
              name: 'qrcode',
              component: () => import('./views/comp/qrcode.vue'),
              meta: {
                title: 'qrcode'
              }
            }
          ]
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
