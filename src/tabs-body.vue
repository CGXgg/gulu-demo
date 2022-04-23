<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'TabsBodyWheel',
        inject:['eventBus'],
        data(){
            return {
            }
        }
    }
</script>

<style lang='scss' scoped>

