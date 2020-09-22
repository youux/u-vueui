import ULink from '../src/link.vue'

export default {
  title: 'ULink',
  component: ULink
}

export const LinkDefault = _ => ({
  components: { ULink },
  template: `
    <div>
      <u-link href="hrttp://www.baidu.com">百度</u-link>
    </div>
  `
})
export const LinkDisabled = _ => ({
  components: { ULink },
  template: `
    <div>
      <u-link disabled href="hrttp://www.baidu.com">百度</u-link>
    </div>
  `
})
