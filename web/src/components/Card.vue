<template>
<div class="card bg-white p-3 mt-3">
    <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xxl flex-1 px-2">{{title}}</div>
        <i class="iconfont icon-plans"></i>
    </div>
    <div class="card-body pt3">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    props:{
        title:{type:String,require:true},
        icon:{type:String,require:true},
    }
};
</script >
<style lang="scss">
@import '../assets/scss/_variables.scss';
.card {
    .card-header{
        border-bottom: 1px solid $border-color ;
    }
    border-bottom: 1px solid $border-color ;
}
</style>