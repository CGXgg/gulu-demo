<template>
  <div class="side">
    <slot>Side</slot>
  </div>
</template>

<script>
export default {
  name: 'SideWheel',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.side {
  text-align: center;
  background: #666;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>
