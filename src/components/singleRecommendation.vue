<template>

    <div ref="recommendation" class="recommendation-box-component">
        <div class="recommendationcontainer">
            <div class="recommendation-info">
                <span style="margin-left: 6px;">{{ recommendation.recommender_name }}skskskl</span>
                <span @click="showOptions = !showOptions" style="position: absolute; right: 28px; top: 4px; "><i
                        class="bi bi-three-dots"></i></span>
            </div>
            <hr>
            <article>
                <div style="display: flex; " class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object recommendedimage" :src='imageURL' alt="Image">
                    </a>
                    <div class="recommendation-content-text">
                        <div style="color:#818384">
                            <small>{{ recommendation.category }}</small>
                            <i :class="{
                                'bi bi-music-note-beamed': recommendation.type === 'Music',
                                'bi bi-film': recommendation.type === 'Movie',
                                'bi bi-controller': recommendation.type === 'Game',
                                'bi bi-book': recommendation.type === 'Book',
                                'bi bi-person': recommendation.type === 'Artiste',
                                'bi bi-person': recommendation.type === 'Actor',
                                'typeicon': true
                            }">
                            </i>
                        </div>
                        <h5 class="recommendeditemname">{{ recommendation.header }}</h5>
                        <p>{{ recommendation.content }}</p>
                    </div>
                </div>
            </article>

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
                    <span style="margin:5px" class="options">
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
                    <div v-bind:class="{ saved: SAVED, option: true }" @click="save"><i class="fa fa-bookmark"></i> Save</div>
                    <div class="option"> <i class="bi bi-share"></i> Share</div>
                    <!-- <div class="option"> <i class="fa fa-edit"></i> Edit</div> -->
                    <div class="option"> <i class="bi bi-trash"></i> Report</div>
                    <div v-show="BELONGSTOUSER" class="option"> <i class="bi bi-trash"></i> Delete</div>
                </div>
            </transition>
            <!--comments-->
            <div v-show="showComments" class="commentdialogue">
                <div class="comments">
                    <comment v-for="(comment_, commentIndex) in comments" :key="comment_.comment_id"
                        :commentIndex="commentIndex" :comment="comment_" :recommendation="recommendation"
                        :recommendationType="recommendationType">

                    </comment>
                    <div>
                        <p v-show="false"
                            style="display: flex; justify-content: center;  align-items:center;   position: absolute; top: 50%; left: 48%;  margin-left: -60px; font-size: 1.5em; ">
                            No comments</p>
                    </div>

                </div>
                <div class="makecomment">
                    <textarea name="comment" cols="30" rows="10" class="commentinput" v-model="comment"></textarea>
                    <button class="commentbutton" @click="makeComment">Comment</button>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
import { addDoc, collection, collectionGroup, getDocs, query, serverTimestamp, where, doc, updateDoc, deleteDoc, orderBy, increment, getDoc, FieldValue, arrayUnion, arrayRemove } from '@firebase/firestore'
import { firestore } from '@/firebase/firebase'
import { mapState } from 'vuex'
import comment from '@/components/comment.vue'
import { bus } from '../main'
import moment from 'moment'
export default {
    components: {
        comment
    },
    data() {
        return {
            recommendation: {},
            recommendationType: '',
            comment: null,
            showComments: true,
            showOptions: false,
            comments: [],
            upvoted: false,
            downvoted: false,
            saved: false

        }
    },
    methods: {
        makeComment() {
            if (this.comment) {
                const commentCollection = collection(firestore, 'comments')
                const commentData = {
                    comment_text: this.comment,
                    date: serverTimestamp(),
                    owner_id: this.user_id,
                    owner_name: this.username,
                    post_id: this.recommendation.uid,
                    replies: []
                }
                addDoc(commentCollection, commentData)
                    .then((comment) => {
                        this.comments.unshift({ ...commentData, comment_id: comment.id })
                        this.comment = ''
                        this.number_of_comments= 0

                        // increase number of comments count
                        const recommendationDoc = doc(firestore, `/recommendations/${this.recommendationType}/${this.recommendationType}/${this.recommendation.uid}`)
                        updateDoc(recommendationDoc, {
                            number_of_comments: increment(1)
                        })

                    })
            }
        },
        async getComments() {
            const commentCollection = collection(firestore, 'comments');
            const commentsQuery = query(commentCollection, orderBy('date', 'desc'), where('post_id', "==", this.recommendation.uid))
            const comments = await getDocs(commentsQuery)
            comments.forEach((snapshot) => {
                this.comments.push({ ...snapshot.data(), comment_id: snapshot.id })
            })
        },
        async upvote() {
            const recommendationDoc = doc(firestore, `/recommendations/${this.recommendationType}/${this.recommendationType}/${this.recommendation.uid}`)
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.UPVOTEDON) {
                this.upvoted = true
                updateDoc(recommendationDoc, {
                    upvotes: increment(1)
                })
                    .then(() => {
                        this.UPVOTES = 1
                        this.$store.dispatch('authStore/upvote', this.recommendation.uid)
                        this.upvoted = true
                        updateDoc(userDoc, {
                            upvotes: arrayUnion(this.recommendation.uid)
                        })
                            .catch(() => {
                                this.upvoted = false
                            })
                    })
            } else {
                if (this.upvoted == true) {
                    this.upvoted = false
                    updateDoc(recommendationDoc, {
                        upvotes: increment(-1)
                    })
                        .then(() => {
                            this.UPVOTES = -1
                            this.$store.dispatch('authStore/removeUpvote', this.recommendation.uid)
                            updateDoc(userDoc, {
                                upvotes: arrayRemove(this.recommendation.uid)
                            })

                        })
                        .catch(() => {
                            this.upvoted = true
                        })
                }
            }

        },
        async downvote() {
            const recommendationDoc = doc(firestore, `/recommendations/${this.recommendationType}/${this.recommendationType}/${this.recommendation.uid}`)
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.DOWNVOTEDON) {
                this.downvote = true
                updateDoc(recommendationDoc, {
                    downvotes: increment(1)
                })
                    .then(() => {
                        this.DOWNVOTES = 1
                        this.$store.dispatch('authStore/downvote', this.recommendation.uid)
                        this.downvoted = true
                        updateDoc(userDoc, {
                            downvotes: arrayUnion(this.recommendation.uid)
                        })
                    })
                    .catch(() => {
                        this.downvote = false
                    })
            } else {
                if (this.downvoted == true) {
                    this.downvoted = false
                    updateDoc(recommendationDoc, {
                        downvotes: increment(-1)
                    })
                        .then(() => {
                            this.DOWNVOTES = -1
                            this.$store.dispatch('authStore/removeDownvote', this.recommendation.uid)
                            updateDoc(userDoc, {
                                downvotes: arrayRemove(this.recommendation.uid)
                            })

                        })
                        .catch(() => {
                            this.downvote = true
                        })

                }
            }

        },
        async save() {
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.SAVED) {
                this.saved = true
                updateDoc(userDoc, {
                    saves: arrayUnion(this.recommendation.uid)
                })
                    .then(() => {
                        this.$store.dispatch('authStore/save', this.recommendation.uid)
                    })
                    .catch(() => {
                        this.saved = false
                    })

            } else {
                if (this.saved == true) {
                    this.saved = false
                    this.$store.dispatch('authStore/removeSave', this.recommendation.uid)
                    updateDoc(userDoc, {
                        saves: arrayRemove(this.recommendation.uid)
                    })
                        .catch(() => {
                            this.saved = true
                        })

                }
            }

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
        ...mapState('authStore', ['user_id', 'username', 'upvotes', 'downvotes', 'saves']),
        UPVOTES: {
            get() {
                return this.recommendation.upvotes
            },
            set(increment) {
                this.recommendation.upvotes += increment
            }
        },
        UPVOTEDON() {
            if (this.upvotes.includes(this.recommendation.uid)) {
                this.upvoted = true
            }else{
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
            if (this.downvotes.includes(this.recommendation.uid)) {
                this.downvoted = true
            }else{
                this.downvoted = false
            }
            return this.downvoted
        },
        SAVED() {
            if (this.saves.includes(this.recommendation.uid)) {
                this.saved = true
            }
            else{
                this.saved = false
            }
            return this.saved
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
    async created() {
        const recommendationId = this.$route.params.id
        if (recommendationId.includes('MusicRecommendation')) {

            const recommendationCollection = query(collectionGroup(firestore, 'MusicRecommendations'), where('id', '==', recommendationId))
            const recommendation = await getDocs(recommendationCollection)
            this.recommendationType = 'MusicRecommendations'
            this.recommendation = { ...recommendation.docs[0].data(), uid: recommendation.docs[0].id }
            this.getComments()

        }
        if (recommendationId.includes('MovieRecommendation')) {
            const recommendationCollection = query(collectionGroup(firestore, 'MovieRecommendations'), where('id', '==', recommendationId))
            const recommendation = await getDocs(recommendationCollection)
            this.recommendation = { ...recommendation.docs[0].data(), uid: recommendation.docs[0].id }
            this.getComments()
            this.recommendationType = 'MovieRecommendations'


        }
        if (recommendationId.includes('BookRecommendation')) {
            const recommendationCollection = query(collectionGroup(firestore, 'BookRecommendations'), where('id', '==', recommendationId))
            const recommendation = await getDocs(recommendationCollection)
            this.recommendation = { ...recommendation.docs[0].data(), uid: recommendation.docs[0].id }
            this.recommendationType = 'BookRecommendations'
            this.getComments()

        }
        if (recommendationId.includes('GameRecommendation')) {
            const recommendationCollection = query(collectionGroup(firestore, 'GameRecommendations'), where('id', '==', recommendationId))
            const recommendation = await getDocs(recommendationCollection)
            this.recommendation = { ...recommendation.docs[0].data(), uid: recommendation.docs[0].id }
            this.recommendationType = 'GameRecommendations'
            this.getComments()

        }

        bus.$on('deleteComment', (commentIndex) => {
            this.comments.splice(commentIndex, 1)
            const recommendationDoc = doc(firestore, `/recommendations/${this.recommendationType}/${this.recommendationType}/${this.recommendation.uid}`)
            updateDoc(recommendationDoc, {
                number_of_comments: increment(-1)
            })
        })

    },
    mounted() {
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
.showReply-leave-to{
    opacity:0
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
    width: 100%;

    hr {
        border-top: 1px solid var(--textcolornotimportant);
        padding: 3px;
        margin: 0;
    }

    .recommendation-info {
        display: flex;
        flex-direction: row;
        justify-items: space-between;

    }
}

.recommendation-box-component {
    width: 100%;
    padding: 5px 19px;

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


.saved {
    color: #d847ff;
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

    div{
        &:first-child{
            border-top-left-radius: 10px;
            &:active{
                color:#d847ff;
            }
        }
        &:last-child{
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


.makecomment {
    height: 35px;
    background-color: var(--primary);
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    position: sticky;
    bottom: 2px;
    border-radius: 22px;

    .commentinput {
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

    .commentbutton {
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



.upvoted {
    color: var(--brandcolor);
}

.downvoted {
    color: red;
}
</style>
  