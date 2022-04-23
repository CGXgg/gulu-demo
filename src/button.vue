<template>
  <button
    class="g-button"
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
  >
    <g-icon class="icon" v-if="icon && !loading" :name="icon" />
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content-text">
      <slot />
    </div>
  </button>
</template>
<script>
import Icon from './icon';
export default {
  name: 'GuluButton',
  components: {
    'g-icon': Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right';
      },
    },
  },
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-active-bg: #eee;
$background-color: white;
$border-radius: 4px;
$button-height: 32px;
$border-color-hover: #666;
$border-color: #999;
$bg-active-color: #666;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  background: $background-color;
  border-radius: $border-radius;
  padding: 0 1em;
  height: $button-height;
  border: 1px solid $border-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  &.icon-left {
    > .icon {
      order: 1;
      margin-right: 0.2em;
    }
    > .content-text {
      order: 2;
    }
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
    > .content-text {
      order: 1;
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: $bg-active-color;
  }
  &:hover {
    border-color: $border-color-hover;
  }
  .loading {
    animation: spin 0.75s infinite linear;
  }
  &.circle {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: relative;
    > .icon {
      position: absolute;
    }
  }
}
</style>
