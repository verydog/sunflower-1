import SunMarkdown from './src/index'

SunMarkdown.install = (Vue)=>{
  Vue.component(SunMarkdown.name, SunMarkdown)
}

export default SunMarkdown