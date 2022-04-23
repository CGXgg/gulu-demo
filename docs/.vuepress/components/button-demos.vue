<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings" :loading="true">按钮</g-button>
    <g-button icon="settings" icon-position="right">按钮</g-button>
    <g-button
      icon="settings"
      circle
      :loading="toggle"
      @click="toggle = !toggle"
    ></g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script>
import Button from '../../../src/button';
import ButtonGroup from '../../../src/button-group';
export default {
  data() {
    return {
      loading: false,
      toggle: false,
    };
  },
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
  },
};
</script>
