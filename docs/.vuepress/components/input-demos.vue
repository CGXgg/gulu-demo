<template>
  <div>
    <div class="box">
      <g-input value="张三" disabled></g-input>
      <g-input value="李四" readonly></g-input>
      <g-input value="王五"></g-input>
    </div>
    <div class="box">
      <g-input v-model="message"></g-input>
      <span>message:{{ message }}</span>
    </div>
    <div class="box">
      <g-input value="" error="姓名不能少于两个字"></g-input>
    </div>
  </div>
</template>

<script>
import Input from '../../../src/input';
export default {
  name: '',
  components: {
    'g-input': Input,
  },
  data() {
    return {
      message: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px 0;
}
</style>
