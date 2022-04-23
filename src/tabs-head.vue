<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsHeadWheel',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let { width, height, left, top } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = scrollX + left + 'px';
      this.$refs.line.style.top = top + height + scrollY + 'px';
    });
  },
};
</script>

<style lang="scss" scoped>
$tabs-height: 40px;
$blue: #409eff;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  > .actions-wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 16px;
  }
  > .line {
    position: absolute;
    transition: all 350ms;
    border-bottom: 2px solid $blue;
  }
}
</style>
