---
title: Toast
---

# toast

标签组件

1.组件介绍

弹窗组件功能及用法如下，支持设置弹窗内容、弹窗位置、自动关闭、手动关闭、关闭回调等功能

2.使用方法

<ClientOnly>
<toast-demos></toast-demos>
</ClientOnly>

3.组件代码

```
    <div class="toast-wrapper" ref="wrapper">
        <g-button @click="showToast1">默认顶部弹窗</g-button>
        <g-button @click="showToast2">默认中间弹窗</g-button>
        <g-button @click="showToast3">默认底层弹窗</g-button>
        <g-button @click="showToast4">设置手动关闭</g-button>
        <g-button @click="showToast5">设置关闭回调</g-button>
    </div>
```

```
methods: {
showToast1() {
this.$toast(
            '出现顶部位置自动关闭',
            { position:'top', autoClose:2},
            this.$refs.wrapper
)
},
showToast2() {
this.$toast(
            '出现中间位置自动关闭',
            { position:'middle',autoClose:2 },
            this.$refs.wrapper
)
},
showToast3() {
this.$toast(
            '出现底部位置自动关闭',
            { position:'bottom',autoClose:2},
            this.$refs.wrapper
)
},
showToast4() {
this.$toast('设置手动关闭按钮',
{
autoClose:false,

            },
            this.$refs.wrapper
        )
    },
    showToast5() {
        this.$toast(
            '设置手动关闭回调函数',
            {
                autoClose:false,
                closeButton: { text: '关闭', callback(){ alert('弹窗被关闭了') }
                }
            },
            this.$refs.wrapper
        )
    }

}
```
