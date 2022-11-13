<template>
    <div>
        <todaysRecommendation></todaysRecommendation>
        <sectionButton></sectionButton>
        <categoryBar class="categoryBar"></categoryBar>

        <recommendationBox v-for="recommendation in recommendationData" :key="recommendation.id" :recommendation="recommendation"></recommendationBox>
    </div>
</template>

<script>
import todaysRecommendation from '../components/todaysRecommendation.vue'
import categoryBar from '../components/categoryBar'
import sectionButton from '../components/sectionButton.vue'
import recommendationBox from '../components/recommendationBox.vue'
export default {
    components: {
        todaysRecommendation,
        categoryBar,
        sectionButton,
        recommendationBox
    },
    data(){
        return {
            recommendationData:[
                {
                    type:'Movie',
                    recommendeditem:"God of war",
                    content:'God of foihad sfohi fadifs sgoisf gfhgs  gsofg  fog guif ',
                    isreactedup:true,
                    isreacteddown:false,
                    downs:12,
                    date:'21st January 2002',
                    id:'klskls',
                    user:'Artimus',
                    ups:12
                },
                {
                    type:'Movie',
                    recommendeditem:"God of war",
                    content:'God of foihad sfohi fadifs sgoisf gfhgs  gsofg  fog guif ',
                    isreactedup:true,
                    isreacteddown:false,
                    downs:12,
                    date:'21st January 2002',
                    id:'89023ioekl',
                    user:'Iddi',
                    ups:12
                },
                {
                    type:'Movie',
                    recommendeditem:"God of war",
                    content:'God of foihad sfohi fadifs sgoisf gfhgs  gsofg  fog guif ',
                    isreactedup:true,
                    isreacteddown:false,
                    downs:12,
                    date:'21st January 2002',
                    id:'klsklsss',
                    user:'User',
                    ups:12
                }
            ]
        }
    }
}
</script>

<style>

</style>