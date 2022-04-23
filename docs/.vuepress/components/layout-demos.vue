<template>
  <div>
    <g-layout>
      <g-header></g-header>
      <g-content></g-content>
      <g-footer></g-footer>
    </g-layout>
    <br />
    <g-layout>
      <g-side></g-side>
      <g-layout>
        <g-header></g-header>
        <g-content></g-content>
        <g-footer></g-footer>
      </g-layout>
    </g-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout';
import Header from '../../../src/header';
import Content from '../../../src/content';
import Side from '../../../src/side';
import Footer from '../../../src/footer';
export default {
  name: '',
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-side': Side,
    'g-footer': Footer,
  },
};
</script>

<style lang="scss" scoped></style>
