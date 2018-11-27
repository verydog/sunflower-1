import Controller from './src/index'

Controller.install = (Vue)=>{
  Vue.component(Controller.name, Controller)
}

export default Controller