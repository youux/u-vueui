import UDemo from './src/demo.vue'

UDemo.install = Vue => {
  Vue.component(UDemo.name, UDemo)
}

export default UDemo
