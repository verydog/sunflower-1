import SunSwiperLayoutItem from './sun-swiper-layout-item'
import SunSwiperLayout from './sun-swiper-layout'


const components = [
  SunSwiperLayoutItem,
  SunSwiperLayout
]

const install = function(Vue) {
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  SunSwiperLayoutItem,
  SunSwiperLayout
}