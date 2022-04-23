---
title: Popover - 弹出层
---

# 弹出层

1.组件介绍

冒泡组件功能及用法如下，支持设置冒泡方向、触发形式等功能

2.使用方法
<ClientOnly>
<popover-demos></popover-demos>
</ClientOnly>

3.组件代码

```HTML

  <div>
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

```
