<template>
  <div class="collapse-wrapper">
    <g-collapse :selected.sync="currentSelected">
      <g-collapse-item title="标题1" name="1">第一个内容 </g-collapse-item>
      <g-collapse-item title="标题2" name="2">第二个内容 </g-collapse-item>
      <g-collapse-item title="标题3" name="3">第三个内容 </g-collapse-item>
    </g-collapse>
    <br />
    <g-collapse :selected.sync="currentSelected" single>
      <g-collapse-item title="标题1" name="1">第一个内容 </g-collapse-item>
      <g-collapse-item title="标题2" name="2">第二个内容 </g-collapse-item>
      <g-collapse-item title="标题3" name="3">第三个内容 </g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse';
import CollapseItem from '../../../src/collapse-item';
export default {
  data() {
    return {
      currentSelected: [1],
    };
  },
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem,
  },
};
</script>
