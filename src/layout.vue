<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LayoutWheel',
  data() {
    return {
      layoutClass: {
        hasSide: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'SideWheel') {
        this.layoutClass.hasSide = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 80vh;
  display: flex;
  flex-grow: 1;
  color: white;
  flex-direction: column;
  &.hasSide {
    flex-direction: row;
  }
}
</style>
