---
title: Collapse - 手风琴
---

# 手风琴

折叠组件 1.组件介绍

折页组件功能及用法如下，单页显示或多页显示等功能

2.使用方法

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>
3.组件代码

```HTML
<div class="collapse-wrapper">
    <g-collapse :selected.sync="currentSelected">
        <g-collapse-item title="标题1" name="1">第一个内容 </g-collapse-item>
        <g-collapse-item title="标题2" name="2">第二个内容 </g-collapse-item>
        <g-collapse-item title="标题3" name="3">第三个内容 </g-collapse-item>
    </g-collapse>
    <g-collapse :selected.sync="currentSelected" single>
        <g-collapse-item title="标题1" name="1">第一个内容 </g-collapse-item>
        <g-collapse-item title="标题2" name="2">第二个内容 </g-collapse-item>
        <g-collapse-item title="标题3" name="3">第三个内容 </g-collapse-item>
    </g-collapse>
</div>

```
