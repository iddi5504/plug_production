<template>
    <div>
        <todaysRecommendation ></todaysRecommendation>
        <sectionButton></sectionButton>
        <categoryBar class="categoryBar"></categoryBar>
        <template v-for="feed in FEED">
            <postBox v-if="feed.type == 'post'" :key="feed.id" :postData="feed"></postBox>
            <recommendationBox v-if="feed.type == 'recommendation'" :key="feed.id" :recommendation="feed"></recommendationBox>
        </template>
    </div>
</template>

<script>
import todaysRecommendation from '../components/todaysRecommendation.vue'
import categoryBar from '../components/categoryBar'
import sectionButton from '../components/sectionButton.vue'
import recommendationBox from '../components/recommendationBox.vue'
import postBox from '../components/postBox.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        todaysRecommendation,
        categoryBar,
        sectionButton,
        recommendationBox,
        postBox
    },
    data(){
        return {
         
        }
    },
    methods:{
        
    },
    computed:{
        ...mapGetters('recommendationsStore',['FEED'])
    },
    created(){
        this.$store.dispatch('recommendationsStore/getRecommendations')
        this.$store.dispatch('recommendationsStore/getPosts')
    },
    mounted(){
    }
}
</script>

<style>

</style>