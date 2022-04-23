---
title: Layout - 布局
---

# 布局

1.组件介绍

布局组件功能及用法如下，支持常见基础布局

2.使用方法
<ClientOnly>
<layout-demos></layout-demos>
</ClientOnly>

3.组件代码

```HTML
    <div>
        <g-layout>
            <g-header></g-header>
            <g-content></g-content>
            <g-footer></g-footer>
        </g-layout>
    <br/>
    <g-layout>
        <g-side></g-side>
        <g-layout>
            <g-header></g-header>
            <g-content></g-content>
            <g-footer></g-footer>
        </g-layout>
    </g-layout>
</div>
```
