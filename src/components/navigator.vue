<template>
    <div class="navigator">
        <div :class="{'isselected':isselected==='irecommend'}" @click="isselected='irecommend'"><span
                style="font-weight:500">12</span> iRecommend</div>
        <div :class="{'isselected':isselected==='myrecommendmes'}" @click="isselected='myrecommendmes'">
            <span style="font-weight:500">31</span> Recommendme</div>
        <div :class="{'isselected':isselected==='posts'}" @click="isselected='posts'"><span
                style="font-weight:500">213</span> Post</div>
        <div :class="{'isselected':isselected==='posts'}" @click="isselected='saved'"><span
                style="font-weight:500">0</span> Saved</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>