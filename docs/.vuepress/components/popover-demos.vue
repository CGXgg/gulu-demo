<template>
  <div>
    <div style="margin: 100px 10px 0 10px">
      <g-popover position="bottom">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>向下</g-button>
      </g-popover>

      <g-popover>
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>向上</g-button>
      </g-popover>

      <g-popover position="left">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>向左</g-button>
      </g-popover>

      <g-popover position="right">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>向右</g-button>
      </g-popover>
    </div>
    <br />
    <div style="margin: 10px">
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>下浮</g-button>
      </g-popover>
      <g-popover trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>上浮</g-button>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>左浮</g-button>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>popover内容</div>
        </template>
        <g-button>右浮</g-button>
      </g-popover>
    </div>
  </div>
</template>

<script>
import Popover from '../../../src/popover';
import Button from '../../../src/button';
export default {
  name: '',
  components: {
    'g-popover': Popover,
    'g-button': Button,
  },
};
</script>

<style lang="scss" scoped></style>
