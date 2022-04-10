<template>
  <transition name="slide">
    <div class="side" v-if="visible">
      <slot></slot>
      <button @click="visible = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GuluSide',
  data() {
    return {
      visible: true,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.side {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}
</style>
