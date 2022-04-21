<template>
  <div>
    <g-row>
      <g-col span="8">8</g-col>
      <g-col span="16">16</g-col>
    </g-row>
    <br />
    <g-row>
      <g-col span="8">8</g-col>
      <g-col span="6" offset="2">6</g-col>
      <g-col span="4" offset="4">4</g-col>
    </g-row>
    <br />
    <g-row>
      <g-col span="8">8</g-col>
      <g-col span="6">6</g-col>
      <g-col span="4">4</g-col>
    </g-row>
    <br />
    <g-row align="right">
      <g-col span="8">8</g-col>
      <g-col span="6">6</g-col>
      <g-col span="4">4</g-col>
    </g-row>
    <br />
  </div>
</template>

<script>
import Col from '../../../src/col.vue';
import Row from '../../../src/row';
export default {
  components: {
    name: '',
    'g-col': Col,
    'g-row': Row,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.col {
  border: 1px solid green;
  height: 100%;
  background: pink;
}
</style>
