<template>
    <div>
        <appNav></appNav>
        <div class="profile-page-content">
            <div class="profile-section">
                <profileContainer></profileContainer>
            </div>
            <div class="user-feed">
                <div class="navigator">
                    <div :class="{ 'isselected': selected === 'userRecommendations' }"
                        @click="selected = 'userRecommendations'"><span style="font-weight:500">{{
                                number_of_recommendations
                        }}</span> iRecommend
                    </div>
                    <div :class="{ 'isselected': selected === 'usersAskedRecommendations' }"
                        @click="selected = 'usersAskedRecommendations'">
                        <span style="font-weight:500">{{ number_of_recommendationsAsked }}</span> Recommendme
                    </div>
                    <div :class="{ 'isselected': selected === 'userPosts' }" @click="selected = 'userPosts'"><span
                            style="font-weight:500">{{ number_of_posts }}</span> Post</div>
                    <div :class="{ 'isselected': selected === 'saved' }" @click="selected = 'saved'"><span
                            style="font-weight:500">{{ NUMBER_OF_SAVES }}</span> Saved
                    </div>

                </div>
                <div class="feed">
                    <template v-for="feed in FEED">
                        <postBox v-if="feed.postType == 'post'" :key="feed.id" :postData="feed"></postBox>
                        <recommendationBox v-if="feed.postType == 'recommendation'" :key="feed.id"
                            :recommendation="feed">
                        </recommendationBox>
                        <askedRecommendation :key="feed.id" v-if="feed.postType == 'askedRecommendation'"
                            :askedRecommendation="feed">
                        </askedRecommendation>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import profileContainer from '@/components/profileContainer.vue';
import appNav from '@/components/appNav.vue';
import askedRecommendation from '@/components/askedRecommendation.vue';
import postBox from '@/components/postBox.vue';
import recommendationBox from '@/components/recommendationBox.vue';
import { mapGetters, mapState } from 'vuex';
export default {
    components: {
        profileContainer,
        appNav,
        askedRecommendation,
        postBox,
        recommendationBox
    },
    data() {
        return {
            selected: 'userRecommendations'
        }
    },
    watch: {
        selected: {
            handler(currentlySelected) {
                this.$store.dispatch('profileStore/selectFeed', currentlySelected)
            },
        }
    },
    mounted() {
        this.$store.dispatch('profileStore/selectFeed', this.selected)
    },
    computed: {
        ...mapGetters('profileStore', ['FEED', 'NUMBER_OF_SAVES']),
        ...mapGetters('authStore', ['NUMBER_OF_SAVES']),
        ...mapState('authStore', ['number_of_posts', 'number_of_recommendations', 'number_of_recommendationsAsked'])
    }
}
</script>

<style lang="scss">
.profile-page-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 46px;

    @media only screen and (min-width: 670px) {
        flex-direction: row;
        justify-content: center;
    }
}

.user-feed {
    max-width: 660px;
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3px;


    .feed {
        gap: 3px;
        display: flex;
        flex-direction: column;
    }
}

.profile-section {
    height: 100%;

    @media only screen and (min-width: 670px) {
        position: sticky;
        top: 46px;
    }
}

.navigator {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    gap: 10px;
    z-index: 3;

    >div {
        background: var(--primary);
        color: var(--textcolorimportant);
        padding: 6px;
        border-radius: 5px;
        width: 158px;
        text-align: center;
        box-shadow: var(--mediumShadow);

    }

    .isselected {
        border-top: 4px solid var(--brandcolor);
        box-shadow: var(--boxshadow);
    }
}
</style>  