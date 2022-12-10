<template>
    <div ref="postBox" style="width: 100%;">
        <div class="postcontainer d-flex flex-direction-column justify-content-around">
            <div class="top-details">
                <span>
                    <router-link :to="'/user/' + postData.user_id">{{ postData.username }}</router-link>
                    <small class="mx-1 topic">{{ postData.postcategory }} related</small>
                </span>
                <span @click="showOptions = !showOptions"><i class="bi bi-three-dots"></i></span>
            </div>
            <div class="post-media">
                <img v-if="postData.mediaType == 'image'" :src="postData.postMediaUrl" class="postimage" alt="">
                <video ref="video" v-if="postData.mediaType == 'video'" width="100%" loop controls webkit-playsinline
                    playsinline>
                    <source :src="postData.postMediaUrl + '#t=0.001'" type="video/mp4">
                </video>

            </div>
            <div style="margin: 0px 5px;" class="post-box-bottom">
                <div class="post-interactions">
                    <!--up-->
                    <span @click="Upvote">
                        <i ref="up" :class="['bi bi-caret-up-fill', { upvoted: UPVOTEDON }]"></i>
                        <small>{{ UPVOTES }}</small>

                    </span>

                    <!--down-->

                    <span @click="Downvote">
                        <i ref="down" :class="['bi bi-caret-down-fill', { downvoted: DOWNVOTEDON }]"></i>
                        <small>{{ postData.downvotes }}</small>

                    </span>
                    <span style="margin:5px" class="options" @click="$router.push(`Post/${postData.post_id}`)">
                        <!--comments-->
                        <i class="bi bi-chat-dots"></i>
                        <small>{{ postData.number_of_comments }}</small>
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
            <div>
                <div class="postdescription">
                    <h5 class="posttitle">{{ postData.postTitle }} </h5>
                    <div>{{ postData.postdescription | snippet }}
                    </div>
                </div>
            </div>
            <!--options-->
            <transition name="showReply">
                <div v-show="showOptions" id="post-options">
                    <div @click="save" v-bind:class="{ saved: SAVED, option: true }"><i class="fa fa-bookmark"></i> Save
                    </div>
                    <div class="option"> <i class="bi bi-share"></i> Share</div>
                    <!-- <div class="option"> <i class="fa fa-edit"></i> Edit</div> -->
                    <div class="option"> <i class="bi bi-megaphone"></i> Report</div>
                    <div v-show="BELONGSTOUSER" class="option" @click="deletePost"> <i class="bi bi-trash"></i> Delete
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { firestore } from '@/firebase/firebase'
import { arrayRemove, arrayUnion, doc, increment, updateDoc } from '@firebase/firestore'
import { deleteObject } from '@firebase/storage'
import moment from 'moment'
import { mapState } from 'vuex'
import { ref } from 'vue'

export default {
    props: ['postData'],
    data() {
        return {
            showComments: true,
            showOptions: false,
            upvoted: false,
            downvoted: false,
            saved: false,
            isReacting: false
        }
    },
    methods: {
        async Upvote() {
            const postDoc = doc(firestore, `/Posts/${this.postData.post_id}`)
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            // if the request is being made do nothing
            if (this.isReacting) return
            // if post not upvoted upvote 
            if (!this.UPVOTEDON) {
                this.upvoted = true
                this.isReacting = true
                updateDoc(postDoc, {
                    upvotes: increment(1)
                })
                    .then(async () => {
                        this.UPVOTES = 1
                        this.upvoted = true
                        this.$store.dispatch('authStore/upvote', this.postData.post_id)
                        await updateDoc(userDoc, {
                            upvotes: arrayUnion(this.postData.post_id)
                        })
                        this.isReacting = false
                    })
                    .catch(() => {
                        this.upvoted = false

                    })
            }
            // else if it has already been upvoted
            else {
                // if post already upvoted 
                if (this.upvoted == true) {
                    this.upvoted = false
                    this.isReacting = true
                    updateDoc(postDoc, {
                        upvotes: increment(-1)
                    })
                        .then(async () => {
                            this.UPVOTES = -1
                            this.$store.dispatch('authStore/removeUpvote', this.postData.post_id)
                            await updateDoc(userDoc, {
                                upvotes: arrayRemove(this.postData.post_id)
                            })
                            this.isReacting = false

                        })
                        .catch(() => {
                            this.upvoted = true
                        })
                }
            }

        },
        async Downvote() {
            const postDoc = doc(firestore, `/Posts/${this.postData.post_id}`)
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            // if the request is being made do nothing
            if (this.isReacting) return
            // if post not downvoted downvote 
            if (!this.DOWNVOTEDON) {
                this.downvoted = true
                this.isReacting = true
                updateDoc(postDoc, {
                    downvotes: increment(1)
                })
                    .then(async () => {
                        this.DOWNVOTES = 1
                        this.downvote = true
                        this.$store.dispatch('authStore/downvote', this.postData.post_id)
                        this.downvoted = true
                        await updateDoc(userDoc, {
                            downvotes: arrayUnion(this.postData.post_id)
                        })
                        this.isReacting = false
                    })
            } else {
                if (this.downvoted == true) {
                    this.downvoted = false
                    this.isReacting = true
                    updateDoc(postDoc, {
                        downvotes: increment(-1)
                    })
                        .then(async () => {
                            this.DOWNVOTES = -1
                            this.$store.dispatch('authStore/removeDownvote', this.postData.post_id)
                            await updateDoc(userDoc, {
                                downvotes: arrayRemove(this.postData.post_id)
                            })
                            this.isReacting = false
                        })
                }
            }

        },
        async save() {
            const userDoc = doc(firestore, `/users/${this.user_id}`)
            if (!this.SAVED) {
                this.saved = true
                this.$store.dispatch('authStore/save', { id: this.postData.post_id, saveType: 'Post' })
                updateDoc(userDoc, {
                    savedPosts: arrayUnion(this.postData.post_id)
                })
                    .then(() => {
                        this.$store.commit('showMinorAlertMessage', 'Post saved', { root: true })

                    })
                    .catch(() => {
                        this.saved = false
                        this.$store.dispatch('authStore/removeSave', { id: this.postData.post_id, saveType: 'Post' })

                    })

            } else {
                if (this.saved == true) {
                    this.saved = false
                    this.$store.dispatch('authStore/removeSave', { id: this.postData.post_id, saveType: 'Post' })
                    updateDoc(userDoc, {
                        savedPosts: arrayRemove(this.postData.post_id)
                    })
                        .catch(() => {
                            this.saved = true
                            this.$store.dispatch('authStore/save', { id: this.postData.post_id, saveType: 'Post' })

                        })

                }
            }

        },
        async deletePost() {
            const imageURL = this.postData.imageURL
            if (imageURL) {
                const imageRef = ref(storage, imageURL)
                deleteObject(imageRef)
            }

            const postDoc = doc(firestore, `/Posts/${this.postData.post_id}`)
            deleteDoc(postDoc)
                .then(() => {
                    // this.deleted = true
                    // this.postData = null
                    // update the Posts asked count
                    const userDoc = doc(firestore, `/users/${this.user_id}`)
                    updateDoc(userDoc, {
                        number_of_Posts: increment(-1)
                    })
                    this.$store.commit('showMinorAlertMessage', 'You Post has been successfully deleted', { root: true })
                    // this.$store.commit('Poststore/deletePost', this.postData.post_id)

                })
        }

    },
    mounted() {
        if (this.postData.mediaType == "video") {
            const postBox = this.$refs.postBox;
            const observeWhen = {
                threshold: 1,
                rootMargin: '-10px 0px'
            }
            const postBoxObserver = new IntersectionObserver((entry) => {
                if (entry[0].isIntersecting && entry[0].intersectionRatio > 0.4) {
                    this.$refs.video.play()
                } else {
                    this.$refs.video.pause()
                }
            }, observeWhen)
            postBoxObserver.observe(postBox);
        }


    },
    computed: {
        ...mapState('authStore', ['user_id', 'username', 'upvotes', 'downvotes', 'savedPosts']),
        UPVOTES: {
            get() {
                return this.postData.upvotes
            },
            set(increment) {
                this.postData.upvotes += increment
            }
        },
        UPVOTEDON() {
            if (this.upvotes.includes(this.postData.post_id)) {
                this.upvoted = true
            } else {
                this.upvoted = false
            }
            return this.upvoted
        },

        DOWNVOTES: {
            get() {
                return this.postData.downvotes
            },
            set(increment) {
                this.postData.downvotes += increment
            }
        },
        DOWNVOTEDON() {
            if (this.downvotes.includes(this.postData.post_id)) {
                this.downvoted = true
            } else {
                this.downvoted = false
            }
            return this.downvoted
        },
        SAVED() {
            if (this.savedPosts.includes(this.postData.post_id)) {
                this.saved = true
            }
            else {
                this.saved = false
            }
            return this.saved
        },
        BELONGSTOUSER() {
            if (this.postData.user_id == this.user_id) {
                return true
            } else {
                return false
            }
        },
        DATE() {
            try {
                var rawDate = this.postData.date.toDate()
            } catch (error) {
                var rawDate = new Date()
            }
            const date = new Date()
            return `${moment(rawDate).fromNow(date)} ago`
        }

    }
}
</script>


<style lang="scss" scoped>
.postcontainer {

    border-radius: 21px;
    background: var(--primary);
    margin: 2px 5px;
    color: var(--textcolorimportant);
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    box-shadow: var(--boxshadow);
    animation: comein-data-v-0148dea0 0.5s;
    transition: 0.5s ease-out;
    flex-direction: column;
    max-width: 700px;
    position: relative;

    video {
        &:focus-visible {
            outline: none;
        }
    }

    .post-media {
        img {
            max-height: 414px;
            width: 100%;
            max-width: min-content;
        }
    }

    .top-details {
        display: flex;
        justify-content: space-between;
        padding: 4px;

        a {
            color: var(--textcolorimportant)
        }

        small {
            padding: 0 4px;
            font-size: 0.8rem;
        }
    }

    .postdescription {
        font-size: var(--bodytextfs);
        font-size: var(--bodytextfs);
        text-align: left;
        padding: 6px;
        word-break: break-word;
    }

    .post-box-bottom {
        margin: 0px 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .post-interactions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 7px;

            i {
                padding: 2px;
            }

            span {
                cursor: pointer;
            }
        }
    }



}



#post-options {
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

.posttitle {
    font-size: var(--titlesfs);
    color: var(--textcolorimportant);

}


.postinteractions {
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.topic {
    font-size: var(--detailsfs);
    color: var(--textcolornotimportant);
}

.verticalline {
    border-left: 1px solid var(--textcolornotimportant);
    margin: 0px 4px 0px 4px;
}

.react {
    border-radius: 5px;
    background-color: var(--secondary);
    padding: 0px 3px;
    box-shadow: 1px 1px 3px black;
    display: flex;
}

.saved {
    color: #d847ff;
}
</style>