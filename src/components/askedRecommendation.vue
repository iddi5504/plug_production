<template>
    <div :key="askedRecommendation.Id" class="recommendmepostcontainer">
        <div class="recommendmecontent">
            <Transition name="showSucess">
                <div v-show="showRecommendSucess" class="recommendsuccess">
                    Thanks for recommending
                </div>
            </Transition>
            <div class="topinfo">
                <div>{{ askedRecommendation.user }}</div>
                <div style="font-size:12px; color:var(--textcolornotimportant);">{{ DATE }}</div>
                <span @click="showOptions = !showOptions"
                    style="flex: 1; align-items: center; display: flex; justify-content: end;">
                    <i class="bi bi-three-dots"></i></span>
            </div>
            <router-link :to="`askedRecommendation/${askedRecommendation.Id}`">

                <div style="display: flex; flex-direction: column; align-items: center;">
                    <img v-if="askedRecommendation.type === 'Game'" :ref="askedRecommendation.Id"
                        class="recommendmeimage" src="../assets/game.jpg" alt="">
                    <img v-if="askedRecommendation.type === 'Music'" :ref="askedRecommendation.Id"
                        class="recommendmeimage" src="../assets/music.jpg" alt="">
                    <img v-if="askedRecommendation.type === 'Book'" :ref="askedRecommendation.Id"
                        class="recommendmeimage" src="../assets/book.jpg" alt="">
                    <img v-if="askedRecommendation.type === 'Movie'" :ref="askedRecommendation.Id"
                        class="recommendmeimage" src="../assets/movie.jpg" alt="">
                    <small class="recommendtype">RecommendMe a {{ askedRecommendation.type }}</small>
                </div>

                <div class="description">
                    {{ askedRecommendation.description }}
                </div>
                <router-link :to="`askedRecommendation/${askedRecommendation.Id}`">
                    <div>
                        {{ askedRecommendation.number_of_recommendations }} recommendations
                    </div>
                </router-link>
            </router-link>

            <div>
                <transition name="slidein">
                    <div v-show="showRecommendinput">
                        <input @keydown.enter="recommend_(recommendmeindex)" type="text" name=""
                            id="recommendTitleInput" v-model="recommendationTitle">
                        <textarea type="text" name="" class="recommendationDescription"
                            v-model="recommendationDescription"></textarea>
                    </div>

                </transition>
            </div>

            <div style="width: 100%;">
                <button class="recommendbutton" @click.prevent="recommend">Recommend</button>
            </div>

            <transition name="showReply">
                <div v-show="showOptions" id="recommendationoptions">
                    <div v-bind:class="{ saved: SAVED, option: true }" @click="save"><i class="fa fa-bookmark"></i> Save
                    </div>
                    <div class="option"> <i class="bi bi-share"></i> Share</div>
                    <!-- <div class="option"> <i class="fa fa-edit"></i> Edit</div> -->
                    <div class="option"> <i class="bi bi-megaphone"></i> Report</div>
                    <div v-show="BELONGSTOUSER" @click="deleteAskedRecommendation" class="option"> <i
                            class="bi bi-trash"></i> Delete</div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, increment, limit, query, serverTimestamp, setDoc, updateDoc, where } from '@firebase/firestore';
import { firestore } from '@/firebase/firebase';
import userRecommendations from './userRecommendation.vue'
import moment from 'moment'
import { mapState } from 'vuex';

export default {
    components: {
        'userRecommendation': userRecommendations
    },
    props: ['askedRecommendation'],
    data() {
        return {
            showRecommendations: false,
            showRecommendinput: false,
            showRecommendSucess: false,
            recommendationTitle: '',
            recommendationDescription: '',
            recommendations: [],
            showOptions: false
        }
    },
    methods: {
        recommend() {
            let recommendationData = {
                recommenderUsername: this.$store.state.authStore.username,
                recommendationTitle: this.recommendationTitle,
                recommendationDescription: this.recommendationDescription,
                recommenderId: this.$store.state.authStore.user_id,
                askedRecommendationId: this.askedRecommendation.Id,
                date: serverTimestamp(),
                likes: 0,
                replies: []
            }
            const usersRecommendationsCollection = collection(firestore, 'userRecommendations')
            if (this.showRecommendinput) {
                if (this.recommendationTitle.length > 0) {
                    const recommendations = doc(usersRecommendationsCollection)
                    recommendationData.recommendationId = recommendations.id

                    setDoc(recommendations, recommendationData)
                        .then(() => {
                            this.showRecommendinput = false
                            this.recommendationTitle = ''
                            this.recommendationDescription = ''
                            this.showRecommendSucess = true
                            setTimeout(() => {
                                this.showRecommendSucess = false
                            }, 3000);
                            // increase number of userRecommendations count
                            const recommendationDoc = doc(firestore, `/AskedRecommendations/${this.askedRecommendation.Id}`)
                            console.log("🚀 ~ file: userRecommendation.vue:85 ~ .then ~ `/userRecommendations/${this.askedRecommendation.type}/${this.askedRecommendation.type}/${this.askedRecommendation.Id}`", `/AskedRecommendations/${this.askedRecommendation.type}/${this.askedRecommendation.type}/${this.askedRecommendation.Id}`)
                            updateDoc(recommendationDoc, {
                                number_of_recommendations: increment(1)
                            })
                                .then(() => {
                                    this.askedRecommendation.number_of_recommendations++
                                })

                        })

                }
            } else {
                this.showRecommendinput = true;
            }
        },
        async save() {
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.SAVED) {
                this.SAVED = true
                this.$store.dispatch('authStore/save', { id: this.askedRecommendation.Id, saveType: 'AskedRecommendation' })
                updateDoc(userDoc, {
                    savedAskedRecommendations: arrayUnion(this.askedRecommendation.Id)
                })
                    .then(() => {
                        this.$store.commit('showMinorAlertMessage', 'Asked recommendation saved', { root: true })
                    })
                    .catch(() => {
                        this.$store.dispatch('authStore/removeSave', { id: this.askedRecommendation.Id, saveType: 'AskedRecommendation' })
                        this.SAVED = false
                    })

            } else {
                if (this.saved == true) {
                    this.SAVED = false
                    this.$store.dispatch('authStore/removeSave', { id: this.askedRecommendation.Id, saveType: 'AskedRecommendation' })
                    updateDoc(userDoc, {
                        savedAskedRecommendations: arrayRemove(this.askedRecommendation.Id)
                    })

                        .catch(() => {
                            this.SAVED = true
                            this.$store.dispatch('authStore/save', { id: this.askedRecommendation.Id, saveType: 'AskedRecommendation' })

                        })

                }
            }

        },
        async deleteAskedRecommendation() {
            const askedRecommendationDoc = doc(firestore, `/AskedRecommendations/${this.askedRecommendation.Id}`)
            deleteDoc(askedRecommendationDoc)
                .then(() => {
                    // update the askedrecommendation count
                    const userDoc = doc(firestore, `/users/${this.user_id}`)
                    updateDoc(userDoc, {
                        number_of_recommendationsAsked: increment(-1)
                    })
                    this.$store.commit('showMinorAlertMessage', 'The recommendation you asked for has been successfully deleted', { root: true })
                })
        }

    },
    computed: {
        DATE() {
            try {
                var rawDate = this.askedRecommendation.date.toDate()
            } catch (error) {
                var rawDate = new Date()
            }
            const date = new Date()
            return `${moment(rawDate).fromNow(date)} ago`
        },
        BELONGSTOUSER() {
            if (this.askedRecommendation.user_id == this.user_id) {
                return true
            } else {
                return false
            }
        },
        ...mapState('authStore', ['user_id', 'username', 'upvotes', 'downvotes', 'savedAskedRecommendations']),
        SAVED: {
            get() {
                if (this.savedAskedRecommendations.includes(this.askedRecommendation.Id)) {
                    this.saved = true
                }
                else {
                    this.saved = false
                }
                return this.saved
            },
            set(saved) {
                this.saved = saved
            }
        },
    }

}
</script>

<style lang="scss">
.recommendmepostcontainer {
    width: 100%;
}

.recommendmecontent {
    position: relative;
    border-radius: 21px;
    background: var(--primary);
    float: none;
    margin: 7px 5px;
    color: var(--textcolorimportant);
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    box-shadow: var(--boxshadow);
    animation: comein-data-v-0148dea0 0.5s;
    transition: 0.5s ease-out;
    max-width: 660px;
}

a {
    color: black;
}

.recommendbutton {
    color: var(--textcolorimportant);
    border: none;
    background: var(--brandcolor);
    font-size: var(--contentfs);

    border-radius: 5px;
    padding: 2px 19px;
    width: 94%;
    margin: 10px;
}


.comment {
    display: flex;
    justify-content: space-between;

}

.commentcontent {
    margin: 10px 5px 2px 15px;
    word-break: break-word;
}

.commentusername {
    position: absolute;
    left: 52px;
    color: var(--textcolorimportant);
    top: -6px;
    font-size: 0.9rem;
    width: 100%;
}

.commentbox {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    animation: comein 0.4s;


}

.comment-text {
    display: flex;
    margin: 4px;
    text-align: left;
    position: relative;
}

.comment-interactions {
    display: flex;
    gap: 17px;
    padding-left: 35px;
}

.comment-bottom {
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

.recommendmeimage {
    width: 160px;
    border-radius: 17px;
    box-shadow: var(--boxshadow);
    margin: 5px;
    height: 120px;
}

.topinfo {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    border-bottom: 1px solid #5d5555;
    align-items: end;
    gap: 5px;
}

#recommendationoptions {
    width: 122px;
    border-radius: 14px;
    background-color: var(--primary);
    position: absolute;
    top: 26px;
    right: 11px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--textcolorimportant);
    border-top-right-radius: 0px;
    box-shadow: var(--boxshadow);
    align-items: flex-start;

    div {
        &:first-child {
            border-top-left-radius: 10px;

            &:active {
                color: #d847ff;
            }
        }

        &:last-child {
            border-bottom-left-radius: 10px;
        }
    }

    .option {
        width: 100%;
        text-align: left;
        padding: 2px 11px;
        box-sizing: border-box;
        cursor: pointer;

        &:hover {
            background: var(--secondary);
        }
    }

}

.description {
    font-size: 14px;
    font-family: system-ui;
    padding: 4px 10px;
    color: var(--contenttext);
    word-break: break-word;
    max-height: 105px;
}

.showSucess-enter-active,
.showSucess-leave-active {
    opacity: 1;
    transition: all 0.5s ease-in-out;
}

.showSucess-enter,
.showSucess-leave-to {
    opacity: 0;
}

.recommendtype {
    font-size: 18px;
    font-weight: 600;
}


.recommends {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 30vh;
    overflow-y: auto;
    transition: 0.5s ease-out;
    padding: 10px 5px;
}

.recommendationDescription {
    width: 100%;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    background-color: var(--secondary);
    color: var(--textcolornotimportant);
    text-align: left;
    height: 100px;
    margin-top: 11px;
    outline: none;
    padding: 7px;
    box-sizing: border-box;
    resize: none;
}

.recommends::-webkit-scrollbar {
    width: 3px;
    background-color: rgb(44, 43, 46);
}

.recommend::-webkit-scrollbar-thumb {
    background-color: white;
    height: 10px;
    width: 10px;
}

.recommend {
    display: flex;
    margin: 4px;
    position: relative;
}

.userprofileimage {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    margin: 1 5 5px 1;
}

.recommendtocontent {
    text-align: start;
    margin: 10px 5px 2px 9px;
    word-break: break-word;
    font-size: 15px;
    font-weight: lighter;
    font-family: system-ui;
}

.recommenderusername {
    position: absolute;
    left: 42px;
    color: var(--textcolorimportant);
    top: -6px;
    font-size: 0.9rem;
}

#recommendTitleInput {
    width: 100%;
    border: none;
    border-radius: 4px;
    background: var(--secondary);
    font-size: 16px;
    color: var(--textcolornotimportant);
    text-align: center;
    height: 34px;
    margin-top: 11px;
    outline: none;
}

.recommendsuccess {
    width: 100%;
    background: #52c66b;
    border-radius: 9px 11px 0px 0px;
    color: black;
    position: absolute;
    left: 0;
    top: 0;
}

.slidein-enter {
    transform: translateY(110px);
    opacity: 0;
    z-index: -1;
    position: absolute;

}

.slidein-leave-to {
    opacity: 0;
    z-index: -1;

}

.slidein-enter-active,
.slidein-leave-active {
    transition: all 0.4s ease-in-out;
}

.slidein-move {
    transition: 0.5s ease;
}
</style>