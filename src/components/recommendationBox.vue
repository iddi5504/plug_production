<template>
    <div ref="recommendation" class="recommendation-box-component">
        <div v-bind:class="{ savedrecommend: false }" class="recommendationcontainer">
            <div class="recommendation-info">
                <span style="margin-left: 6px;">{{ recommendation.recommender_name }}skskskl</span>
                <span class="options-button" @click="showOptions = !showOptions"><i class="bi bi-three-dots"></i></span>
            </div>
            <hr>
            <div style="cursor:pointer" @click='openRecommendation()'>
                <article>
                    <div style="display: flex; " class="media">
                        <a class="pull-left" href="#">
                            <img class="media-object recommendedimage" :src='imageURL' alt="Image">
                        </a>
                        <div class="recommendation-content-text">
                            <div style="color:#818384">
                                <small>{{ recommendation.category }}</small>
                                <i :class="{
                                    'bi bi-music-note-beamed': recommendation.category === 'Music',
                                    'bi bi-film': recommendation.category === 'Movie',
                                    'bi bi-controller': recommendation.category === 'Game',
                                    'bi bi-book': recommendation.category === 'Book',
                                    'bi bi-person': recommendation.category === 'Artiste',
                                    'bi bi-person': recommendation.category === 'Actor',
                                    'typeicon': true
                                }">
                                </i>
                            </div>
                            <h5 class="recommendeditemname">{{ recommendation.header }}</h5>
                            <p>{{ recommendation.content }}</p>
                        </div>
                    </div>
                </article>
            </div>

            <!--recommend-box-bottom-->
            <div style="margin: 0px 5px;" class="recommend-box-bottom">
                <div class="post-interactions">
                    <!--up-->
                    <span @click="upvote">
                        <i ref="up" :class="['bi bi-caret-up-fill', { upvoted: UPVOTEDON }]"></i>
                        <small>{{ UPVOTES }}</small>

                    </span>

                    <!--down-->

                    <span @click="downvote">
                        <i ref="down" :class="['bi bi-caret-down-fill', { downvoted: DOWNVOTEDON }]"></i>
                        <small>{{ recommendation.downvotes }}</small>

                    </span>
                    <span style="margin:5px" class="options"
                        @click="$router.push(`recommendation/${recommendation.id}`)">
                        <!--comments-->
                        <i class="bi bi-chat-dots"></i>
                        <small>{{ recommendation.number_of_comments }}</small>
                    </span>
                    <span @click="save" v-bind:class="{ saved: SAVED, options: true }">
                        <i class="fa fa-bookmark"></i>
                        <small>Save</small>
                    </span>
                </div>
                <div>
                    <span>{{ DATE }}</span>
                </div>
            </div>
            <!--options-->
            <transition name="showReply">
                <div v-show="showOptions" id="recommendationoptions">
                    <div v-bind:class="{ saved: SAVED, option: true }" @click="save"><i class="fa fa-bookmark"></i> Save
                    </div>
                    <div class="option"> <i class="bi bi-share"></i> Share</div>
                    <!-- <div class="option"> <i class="fa fa-edit"></i> Edit</div> -->
                    <div class="option"> <i class="bi bi-megaphone"></i> Report</div>
                    <div v-show="BELONGSTOUSER" class="option" @click="deleteRecommendation"> <i
                            class="bi bi-trash"></i> Delete</div>
                </div>
            </transition>
        </div>
    </div>
</template>
  
<script>
import { arrayUnion, arrayRemove, doc, updateDoc, increment, deleteDoc } from '@firebase/firestore'
import { firestore } from '@/firebase/firebase'
import { mapState } from 'vuex'
import moment from 'moment'
import { deleteObject } from '@firebase/storage'
export default {
    props: ["recommendation"],
    data() {
        return {
            recommendationType: '',
            showComments: true,
            showOptions: false,
            upvoted: false,
            downvoted: false,
            saved: false

        }
    },
    methods: {
        openRecommendation() {
            this.$router.push(
                {
                    params: { recommendationData: this.recommendation },
                    path: `/recommendation/${this.recommendation.id}`,
                }
            )
        },
        async upvote() {
            const recommendationDoc = doc(firestore, `/recommendations/${this.recommendation.id}`)
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.UPVOTEDON) {
                this.upvoted = true
                updateDoc(recommendationDoc, {
                    upvotes: increment(1)
                })
                    .then(() => {
                        this.UPVOTES = 1
                        this.upvoted = true
                        this.$store.dispatch('authStore/upvote', this.recommendation.id)
                        updateDoc(userDoc, {
                            upvotes: arrayUnion(this.recommendation.id)
                        })
                    })
                    .catch(() => {
                        this.upvoted = false

                    })
            } else {
                if (this.upvoted == true) {
                    this.upvoted = false
                    updateDoc(recommendationDoc, {
                        upvotes: increment(-1)
                    })
                        .then(() => {
                            this.UPVOTES = -1
                            this.$store.dispatch('authStore/removeUpvote', this.recommendation.id)
                            updateDoc(userDoc, {
                                upvotes: arrayRemove(this.recommendation.id)
                            })

                        })
                        .catch(() => {
                            this.upvoted = true
                        })
                }
            }

        },
        async downvote() {
            const recommendationDoc = doc(firestore, `/recommendations/${this.recommendation.id}`)
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.DOWNVOTEDON) {
                updateDoc(recommendationDoc, {
                    downvotes: increment(1)
                })
                    .then(() => {
                        this.DOWNVOTES = 1
                        this.downvote = true
                        this.$store.dispatch('authStore/downvote', this.recommendation.id)
                        this.downvoted = true
                        updateDoc(userDoc, {
                            downvotes: arrayUnion(this.recommendation.id)
                        })
                    })
            } else {
                if (this.downvoted == true) {
                    updateDoc(recommendationDoc, {
                        downvotes: increment(-1)
                    })
                        .then(() => {
                            this.DOWNVOTES = -1
                            this.downvoted = false
                            this.$store.dispatch('authStore/removeDownvote', this.recommendation.id)
                            updateDoc(userDoc, {
                                downvotes: arrayRemove(this.recommendation.id)
                            })

                        })
                }
            }

        },
        async save() {
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.SAVED) {
                this.saved = true
                this.$store.dispatch('authStore/save', { id: this.recommendation.id, saveType: 'Recommendation' })
                updateDoc(userDoc, {
                    savedRecommendations: arrayUnion(this.recommendation.id)
                })
                    .then(() => {
                        this.$store.commit('showMinorAlertMessage', 'Recommendation saved', { root: true })

                    })
                    .catch(() => {
                        this.saved = false
                        this.$store.dispatch('authStore/removeSave', { id: this.recommendation.id, saveType: 'Recommendation' })

                    })

            } else {
                if (this.saved == true) {
                    this.saved = false
                    this.$store.dispatch('authStore/removeSave', { id: this.recommendation.id, saveType: 'Recommendation' })
                    updateDoc(userDoc, {
                        savedRecommendations: arrayRemove(this.recommendation.id)
                    })
                        .catch(() => {
                            this.saved = true
                            this.$store.dispatch('authStore/save', { id: this.recommendation.id, saveType: 'Recommendation' })

                        })

                }
            }

        },
        async deleteRecommendation() {
            const imageURL = this.recommendation.imageURL
            if (imageURL) {
                const imageRef = ref(storage, imageURL)
                deleteObject(imageRef)
            }

            const recommendationDoc = doc(firestore, `/recommendations/${this.recommendation.id}`)
            deleteDoc(recommendationDoc)
                .then(() => {
                    // this.deleted = true
                    // this.recommendation = null
                    // update the recommendations asked count
                    const userDoc = doc(firestore, `/users/${this.user_id}`)
                    updateDoc(userDoc, {
                        number_of_recommendations: increment(-1)
                    })
                    this.$store.commit('showMinorAlertMessage', 'You recommendation has been successfully deleted', { root: true })
                    // this.$store.commit('recommendationStore/deleteRecommendation', this.recommendation.id)

                })
        }

    },
    computed: {
        imageURL() {
            if (this.recommendation.imageURL == null) {
                const category = this.recommendation.category
                let image = ''
                switch (category) {
                    case 'Book':
                        image = require('../assets/book.jpg')
                        break;
                    case 'Movie':
                        image = require('../assets/movie.jpg')
                        break;
                    case 'Music':
                        image = require('../assets/music.jpg')
                        break;
                    case 'Game':
                        image = require('../assets/game.jpg')
                        break;

                    default:
                        image = require('../assets/movie.jpg')
                        break;
                }
                return image
            }
            else {
                return this.recommendation.imageURL
            }
        },
        ...mapState('authStore', ['user_id', 'username', 'upvotes', 'downvotes', 'savedRecommendations']),
        UPVOTES: {
            get() {
                return this.recommendation.upvotes
            },
            set(increment) {
                this.recommendation.upvotes += increment
            }
        },
        UPVOTEDON() {
            if (this.upvotes.includes(this.recommendation.id)) {
                this.upvoted = true
            } else {
                this.upvoted = false
            }
            return this.upvoted
        },

        DOWNVOTES: {
            get() {
                return this.recommendation.downvotes
            },
            set(increment) {
                this.recommendation.downvotes += increment
            }
        },
        DOWNVOTEDON() {
            if (this.downvotes.includes(this.recommendation.id)) {
                this.downvoted = true
            } else {
                this.downvoted = false
            }
            return this.downvoted
        },
        SAVED() {
            if (this.savedRecommendations.includes(this.recommendation.id)) {
                this.saved = true
            }
            else {
                this.saved = false
            }
            return this.saved
        },
        BELONGSTOUSER() {
            if (this.recommendation.recommender_id == this.user_id) {
                return true
            } else {
                return false
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
    mounted() {
        if (this.recommendation.id.includes('MusicRecommendation')) {
            this.recommendationType = 'MusicRecommendations'
        }
        if (this.recommendation.id.includes('MovieRecommendation')) {
            this.recommendationType = 'MovieRecommendations'
        }
        if (this.recommendation.id.includes('BookRecommendation')) {
            this.recommendationType = 'BookRecommendations'
        }
        if (this.recommendation.id.includes('GameRecommendation')) {
            this.recommendationType = 'GameRecommendations'
        }
    }

}

</script>
  
<style lang="scss" scoped>
.showReply-enter-active,
.showReply-leave-active {
    position: absolute;
    transform: translateY(0);
    transition: 0.4s ease all;
}

.showReply-enter {
    transform: translateY(100px)
}

.showReply-leave-to {
    opacity: 0
}

.recommendationcontainer {
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

    hr {
        border-top: 1px solid var(--textcolornotimportant);
        padding: 3px;
        margin: 0;
    }

    .recommendation-info {
        display: flex;
        flex-direction: row;
        justify-items: space-between;
        position: relative;

        .options-button {
            position: absolute;
            right: 7px;
            bottom: -9px;
            cursor: pointer;

            i {
                font-size: 30px;
            }
        }
    }
}




.recommendation-content-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    text-align: left;
    width: 100%;

    p {
        font-size: 16px;
        word-break: break-word;
        color: var(--contenttext);
    }

    h5 {
        font-size: 1.1rem;
        color: var(--textcolorimportant);
    }
}

hr {
    margin-top: -1px;
    border: 0;
    border-top: 1px solid #fff;
    margin-bottom: 8px;
    color: var(--textcolornotimportant);
}

.recommendedimage {
    max-width: 147px;
    max-height: 180px;
    border-radius: 20px;
    margin-right: 7px;
    width: 100%;
}


.media-body bi {
    color: #818384;
}


.saved {
    color: #d847ff;
}

#rerecommendcontent {
    width: 75%;
    margin: auto;
    background: var(--secondary);
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 195px;
    max-height: 60px;
    padding: 2px 3px 2px 8px;
    color: var(--textcolornotimportant);
}

#rerecommendbutton {
    margin: 10px;
    background: transparent;
    border: 1px solid gray;
    border-radius: 9px;
    color: var(--textcolorimportant);
}

.savedrecommend {
    background: rgb(39, 32, 32);
}

.recommend-box-bottom {
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .post-interactions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 7px;

        span {
            transition: 0.3s all ease;
        }

        i {
            padding: 2px;
        }

        span {
            cursor: pointer;
        }
    }
}


.typeicon {
    padding: 0px 5px;
}

.rerecommendbottom {
    height: 100px;
    position: relative;
    bottom: 0px;
    left: 0px;
    background: transparent;
    border-bottom-right-radius: 21px;
    border-bottom-left-radius: 21px;
    display: flex;
    flex-direction: column;
    animation: comeinrerecommend-data-v-69c049f9 0.5s;
}

@keyframes comeinrerecommend {
    0% {
        transform: translateY(-100px);

    }

    100% {
        transform: translateY(0px);

    }
}

@keyframes comein {
    0% {
        transform: translateY(-10px);

    }

    100% {
        transform: translateY(0);
    }
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

.option:last-child:hover {
    color: red;

}


@keyframes show {
    0% {
        transform: translateY(120px);
    }

    100% {
        transform: translateY(0px);
    }
}

/*ratedialogue*/
.userprofileimage {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    margin: 1 5 5px 1;
}


.upvoted {
    color: var(--brandcolor);
}

.downvoted {
    color: red;
}
</style>
  