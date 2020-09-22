<template>
  <a :href="disabled ? null : href" :class="[disabled && 'disabled', !underline && 'no-underline']">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'ULink',
  props: {
    href: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.disabled {
  cursor: not-allowed;
}
.no-underline {
  text-decoration: none;
}
</style>
