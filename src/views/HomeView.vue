<template>
<div>
    <RecommendItem></RecommendItem>
    <!-- <RecommendItem></RecommendItem>
    <RecommendItem></RecommendItem>
    <RecommendItem></RecommendItem>
    <RecommendItem></RecommendItem> -->
    <Search></Search>    
</div>
</template>

<script>
import RecommendItem from "../components/RecommendItem.vue"
import Search from "../components/Search.vue"

export default {
    components:{
        RecommendItem,
        Search,
    }
}
</script>

<style>

</style>