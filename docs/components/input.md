---
title: Input -输入框
---

# 输入框

1.组件介绍

输入框组件功能及用法如下，支持 disabled、readonly、error 及双向绑定等功能

2.使用方法
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

3.组件代码

```HTML
    <div >
      <g-input value="张三" disabled></g-input>
      <g-input value="李四" readonly></g-input>
      <g-input value="王五"></g-input>
      <g-input v-model="message"></g-input>
      <span>message:{{ message }}</span>
      <g-input value="" error="姓名不能少于两个字"></g-input>
    </div>

```
