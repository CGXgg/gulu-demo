---
title: Tabs -标签
---

# 标签

1.组件介绍

标签组件功能及用法如下，支持添加 icon，点击标签切换显示相应的内容

2.使用方法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

3.组件代码

```HTML
<div>
    <g-tabs selected="sports">
        <g-tabs-head>
            <template slot="actions">
                <button>设置</button>
            </template>
            <g-tabs-item name="woman"> 美女 </g-tabs-item>
            <g-tabs-item name="finance">财经</g-tabs-item>
            <g-tabs-item name="sports">足球</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
            <g-tabs-pane name="woman">美女相关</g-tabs-pane>
            <g-tabs-pane name="finance">财经相关</g-tabs-pane>
            <g-tabs-pane name="sports">足球相关</g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
</div>


```
