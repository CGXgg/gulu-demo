---
title: Button
---

# 按钮

使用方法

1.组件介绍

按钮组件功能及用法如下，支持添加 icon，设置 icon 位置，加载状态，按钮形状等功能

2.使用方法
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

3.组件代码

```HTML
<div>
  <g-button>默认按钮</g-button>
  <g-button icon="settings" :loading="true">按钮</g-button>
  <g-button icon="settings" icon-position="right">按钮</g-button>
  <g-button icon="settings" circle :loading="toggle" @click="toggle=!toggle"></g-button>
  <g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
  </g-button-group>
</div>
```
