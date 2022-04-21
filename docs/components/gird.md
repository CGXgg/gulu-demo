---
title: Gird -网格
---

# 网格

1.组件介绍

网格组件功能及用法如下，支持自动均分，设置单元宽度、间隔、排列方向等功能

2.使用方法

<ClientOnly>
<gird-demos></gird-demos>
</ClientOnly>
3.组件代码

```
 <div>
    <z-row>
      <z-col span="8">8</z-col>
      <z-col span="16">16</z-col>
    </z-row>
    <br />
    <z-row>
      <z-col span="8">8</z-col>
      <z-col span="6" offset="2">6</z-col>
      <z-col span="4" offset="4">4</z-col>
    </z-row>
    <br />
    <z-row>
      <z-col span="8">8</z-col>
      <z-col span="6">6</z-col>
      <z-col span="4">4</z-col>
    </z-row>
    <br />
    <z-row align="right">
      <z-col span="8">8</z-col>
      <z-col span="6">6</z-col>
      <z-col span="4">4</z-col>
    </z-row>
    <br />
  </div>

```
