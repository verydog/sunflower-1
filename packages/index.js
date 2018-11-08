import SunSwiperLayoutItem from './sun-swiper-layout-item'
import SunSwiperLayout from './sun-swiper-layout'
import SunMarkdown from './sun-markdown'
import SunQrcode from './sun-qrcode'

const components = [
  SunSwiperLayoutItem,
  SunSwiperLayout,
  SunMarkdown,
  SunQrcode,
]

const install = function(Vue) {
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const version = '1.0.0'

export {
  install,
  version,
  SunSwiperLayoutItem,
  SunSwiperLayout,
  SunMarkdown,
  SunQrcode,
}

export default {
  install,
  version
};