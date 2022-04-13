<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'GuluTabs',
  props: {
    selected: {
      type: String,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    // this.$emit('update:selected', 'this');
    this.eventBus.$emit('update:selected', this.selected);
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
