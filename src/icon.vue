<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './iconfont.js';
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.g-icon {
  width: 0.5em;
  height: 0.5em;
}
</style>
