<template>
    <div @scroll="onScroll">
        <todaysRecommendation></todaysRecommendation>
        <sectionButton></sectionButton>
        <categoryBar class="categoryBar"></categoryBar>
        <template v-for="feed in FEED">
            <postBox v-if="feed.postType == 'post'" :key="feed.id" :postData="feed"></postBox>
            <recommendationBox v-if="feed.postType == 'recommendation'" :key="feed.id" :recommendation="feed">
            </recommendationBox>
            <askedRecommendation :key="feed.id" v-if="feed.postType == 'askedRecommendation'"
                :askedRecommendation="feed">
            </askedRecommendation>
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
import askedRecommendation from './askedRecommendation.vue'
export default {
    components: {
        todaysRecommendation,
        categoryBar,
        sectionButton,
        recommendationBox,
        postBox,
        askedRecommendation
    },
    data() {
        return {
            scrollHeight: null,
            offsetHeight: null,
            scrollTop: null,
            totalScroll: null
        }
    },
    methods: {
        onScroll(event) {
            this.totalScroll = Math.floor(event.target.offsetHeight + event.target.scrollTop)
            this.scrollHeight = Math.floor(event.target.scrollHeight)
        }
    },
    computed: {
        ...mapGetters('recommendationsStore', ['FEED'])
    },
    created() {
        this.$store.dispatch('recommendationsStore/getRecommendations')
        this.$store.dispatch('recommendationsStore/getPosts')
        this.$store.dispatch('recommendationsStore/getAskedRecommendations')

    },
    watch: {
        totalScroll(totalScroll) {

            if (totalScroll >= this.scrollHeight - 200) {
                // console.warn('request made')
                // this.$store.dispatch('recommendationsStore/lazyLoadPosts')
                // .then(() => {

                //     this.$store.commit('recommendationsStore/newRequestMade', true)
                // })
            }
        }
    }
}
</script>

<style>

</style>