import UDemo from '../src/demo.vue'

export default {
  title: 'UDemo',
  component: UDemo
}

export const Demo = _ => ({
  components: { UDemo },
  template: `
    <div>
      <u-demo></u-demo>
    </div>
  `
})
