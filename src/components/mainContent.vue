<template>
    <div>
        <todaysRecommendation></todaysRecommendation>
        <sectionButton></sectionButton>
        <categoryBar @click="test" class="categoryBar"></categoryBar>
        <template style="width: 100%;" v-for="feed in FEED">
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
           posts:[{
            postcategory:'Game',
            postTitle:'God of war kinda sucks',
            postdescription:"lorem loremj jkfd j djdjdididoidd difif fisisf dfsofs isfio",
            upvotes: 0,
            downvotes: 0,
            number_of_comments: 0,
            saved: false,
            recommender_name:'Iddi Yakubu',
            content:'lsdd sklfkf klf lkd klf lkfkls ddd sklfkdd sklfkf klf lkd klf lkfkls ddd sklfkf klf lkd klf lkfkls ddd sklfkf klf lkd klf lkfkls ddd sklfkf klf lkd klf lkfkls ddd sklfkf klf lkd klf lkfkls ddd sklfkf klf lkd klf lkfkls df klf lkd klf lkfkls ddd sklfkf klf lkd klf lkfkls dlkknls '
           }]
        }
    },
    methods:{
        test(){
        this.$store.dispatch('recommendationsStore/getRecommendations')

        }
    },
    computed:{
        ...mapGetters('recommendationsStore',['FEED'])
    },
    created(){
        this.$store.dispatch('recommendationsStore/getRecommendations')
        this.$store.dispatch('recommendationsStore/getPosts')
    }
}
</script>

<style>

</style>