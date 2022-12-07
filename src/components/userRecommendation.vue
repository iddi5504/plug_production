<template>
    <div class="userRecommendationbox">
        <div class="userRecommendation">
            <div class="userRecommendation-text">
                <router-link exact tag="span" :to="'profile/' + recommendation.recommenderId">
                    <img class="userprofileimage" src="../assets/albumcover.png" alt="" srcset=" ">
                </router-link>
                <div
                    style="flex: 1 1 0%; display: flex; justify-content: start; flex-direction: column; padding: 0px 10px;">
                    <small class="userRecommendationusername">{{ recommendation.recommenderUsername }}
                        recommends</small>
                    <div style="font-weight: 700; font-size: 1rem; line-height: 14px;">{{
                            recommendation.recommendationTitle
                    }}</div>
                    <p class="userRecommendationcontent">{{ recommendation.recommendationDescription }}</p>
                </div>
            </div>
            <i v-show="BELONGSTOUSER" @click="deleteUserRecommendation(recommendation.recommendationId)"
                class="bi bi-trash"></i>

        </div>
        <div class="userRecommendation-interactions">
            <small>{{ DATE }}</small>
            <small @click="toggleReply" style="color: var(--brandcolor); cursor:pointer;">reply</small>
        </div>
        <div class="replies" v-show="true">
            <div v-for="reply in recommendation.replies" :key="reply.id" class="">
                <div class="userReply">
                    <router-link exact tag="span" :to="'profile/' + recommendation.owner_id">
                        <img class="userprofileimage" src="../assets/albumcover.png" alt="" srcset=" ">
                    </router-link>
                    <div class="userReplyContent">
                        <small class="userReplyusername">{{ reply.owner_name }}</small>
                        <p class="userReplycontent">{{ reply.reply_text }}</p>
                    </div>
                </div>

            </div>
        </div>
        <transition name="showReply">
            <div ref="userRecommendation" key="2" v-show="showReplyField" class="makeuserRecommendation">
                <textarea maxlength="600" draggable="false" name="userRecommendation"
                    class="userRecommendationinput reply-input" v-model="replyText"></textarea>
                <button class="userRecommendationbutton"
                    @click="makeReply(recommendation.recommendationId)">reply</button>
            </div>
        </transition>
        <div class="reply-section">
            <div></div>
            <small @click="showReplies = !showReplies">{{ showRepliesText }} {{ NUMBEROFREPLIES }} replies</small>
        </div>
    </div>
</template>
<script>
import { arrayUnion, collection, deleteDoc, doc, getDoc, increment, updateDoc } from '@firebase/firestore';
import { firestore } from '@/firebase/firebase';
import { mapState } from 'vuex';
import moment from 'moment'
import { bus } from '../main'

export default {
    props: ['recommendation', 'askedRecommendation'],
    data() {
        return {
            replyText: '',
            showReplyField: false,
            showReplies: false,
            numberOfReplies: null
        }
    },
    methods: {
        toggleReply() {
            this.showReplyField = !this.showReplyField
        },
        makeReply(userRecommendation_id) {
            console.log(userRecommendation_id)
            this.showReplyField = false
            const userRecommendationCollection = collection(firestore, 'userRecommendations');
            console.log("🚀 ~ file: userRecommendation.vue:67 ~ makeReply ~ userRecommendation_id", userRecommendation_id)
            const userRecommendation = doc(userRecommendationCollection, userRecommendation_id)
            const replyData = {
                reply_text: this.replyText,
                owner_id: this.user_id,
                owner_name: this.username,
            }
            updateDoc(userRecommendation, {
                replies: arrayUnion(replyData)
            })
                .then(() => {
                    // increase number of userRecommendations count
                    const recommendationDoc = doc(firestore, `/AskedRecommendations/${this.askedRecommendation.Id}`)
                    updateDoc(recommendationDoc, {
                        number_of_recommendations: increment(1)
                    })
                    this.replyText = ''
                    this.replies = replyData
                    this.numberOfReplies += 1

                })
        },
        async deleteUserRecommendation(userRecommendation_id) {
            const userRecommendationCollection = collection(firestore, 'userRecommendations');
            const userRecommendation = doc(userRecommendationCollection, userRecommendation_id)
            deleteDoc(userRecommendation)
                .then(() => {
                    bus.$emit('deleteUserRecommendation', this.userRecommendationIndex)
                    this.$store.commit('showMinorAlertMessage', 'Your recommendation has been successfully deleted', { root: true })

                    // increase number of userRecommendations count

                })
        },
    },
    computed: {
        NUMBEROFREPLIES() {
            return this.numberOfReplies
        },
        ...mapState('authStore', ['user_id', 'username']),

        replies: {
            get() {
                return this.userRecommendation.replies
            },
            set(reply) {
                this.recommendation.replies.push(reply)
            }
        },
        showRepliesText() {
            if (this.showReplies == true) {
                return 'hide'
            } else {
                return 'show'
            }
        },
        DATE() {
            try {
                var rawDate = this.recommendation.date.toDate()
            } catch (error) {
                var rawDate = new Date()
            }
            const date = new Date()
            return `${moment(rawDate).fromNow(date)} ago`
        }

    },
    watch: {

    },
    mounted() {
        this.numberOfReplies = this.recommendation.replies.length
    }

}
</script>

<style lang="scss" scoped>
.userprofileimage {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    margin: 1 5 5px 1;
}

.reply-input {
    max-width: 390px;
}

.makeuserRecommendation {
    height: 35px;
    background-color: var(--primary);
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    position: sticky;
    bottom: 2px;
    border-radius: 22px;

    .userRecommendationinput {
        width: 100%;
        background: var(--secondary);
        border: none;
        border-radius: 10px;
        color: var(--textcolornotimportant);
        padding: 2px 2px 2px 12px;
        height: 100%;
        outline: none;
        resize: none;
        font-size: 16px;

    }

    .userRecommendationbutton {
        border: none;
        background: var(--secondary);
        color: var(--textcolorimportant);
        border-radius: 3px;
        padding: 7px;
        margin: 4px;
        font-size: 1rem;
        height: fit-content;
        box-shadow: var(--boxshadow);

    }
}

.replies {
    padding-left: 70px;
    max-height: 255px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        background: var(--primary);
        width: 4px;
    }

    &::-webkit-scrollbar-corner {
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #979595;
        border-radius: 10px;
        box-shadow: var(--boxshadow);
    }
}

.userRecommendation {
    display: flex;
    justify-content: space-between;

}

.userRecommendationbox {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    animation: comein 0.4s;

    .userRecommendation-text {
        display: flex;
        margin: 4px;
        text-align: left;
        position: relative;
    }

    .userRecommendation-interactions {
        display: flex;
        gap: 17px;
        padding-left: 35px;
    }

    .userRecommendation-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .reply-section {
        align-items: center;
        display: flex;
        padding: 0px 0px 1px 44px;
        animation: 0.4s ease 0s 1 normal none running comein;
        flex-direction: row;

        >div {
            width: 77px;
            height: 1px;
            background-color: gray;
        }

        small {
            padding: 0px 0px 0px 7px;
            cursor: pointer;
        }
    }

}

.userRecommendationcontent {
    word-break: break-word;
    padding: 2px;
}

.userReply {
    display: flex;
    justify-content: flex-start;
    gap: 7px;
}

.userReplyContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.userRecommendationusername {
    color: var(--textcolornotimportant);
    width: 100%;
}

.makeuserRecommendation {
    justify-content: flex-end;
}
</style>