<template>
    <div class="commentbox">
        <div class="comment">
            <div class="comment-text">
                <router-link exact tag="span" :to="'profile/' + comment.owner_id">
                    <img class="userprofileimage" src="../assets/albumcover.png" alt="" srcset=" ">
                </router-link>
                <p class="commentcontent">{{ comment.comment_text }}</p>
                <small class="commentusername">{{ comment.owner_name }}</small>
            </div>
            <i @click="deleteComment(comment.comment_id)" class="bi bi-trash"></i>

        </div>
        <div class="comment-interactions">
            <small>2h</small>
            <small @click="toggleReply" style="color: var(--brandcolor);">reply</small>
        </div>
        <div class="replies" v-show="showReplies">
            <div v-for="reply in comment.replies" :key="reply.id" class="comment">
                <div class="comment-text">
                    <router-link exact tag="span" :to="'profile/' + comment.owner_id">
                        <img class="userprofileimage" src="../assets/albumcover.png" alt="" srcset=" ">
                    </router-link>
                    <p class="commentcontent">{{ comment.comment_text }}</p>
                    <small class="commentusername">{{ comment.owner_name }}</small>
                </div>

            </div>
        </div>
        <transition name="showReply">
            <div ref="comment" key="2" v-show="showReplyField" class="makecomment">
                <textarea name="comment" cols="30" rows="10" class="commentinput" v-model="replyText"></textarea>
                <button class="commentbutton" @click="makeReply(comment.comment_id)">reply</button>
            </div>
        </transition>
        <div class="reply-section">
            <div></div>
            <small @click="showReplies = !showReplies">show {{ NUMBEROFREPLIES }} replies</small>
        </div>
    </div>
</template>

<script>
import { arrayUnion, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { firestore } from '@/firebase/firebase';
import { mapState } from 'vuex';
import { bus } from '../main'
export default {
    props: ['comment', 'recommendation', 'commentIndex'],
    data() {
        return {
            replyText: '',
            showReplyField: false,
            showReplies: false,
            numberOfReplies:null
        }
    },
    methods: {
        toggleReply() {
            this.showReplyField = !this.showReplyField
        },
        makeReply(comment_id) {
            const commentCollection = collection(firestore, 'comments');
            const comment = doc(commentCollection, comment_id)
            const replyData = {
                reply_text: this.replyText,
                owner_id: this.user_id,
                owner_name: this.username,
                post_id: this.recommendation.uid
            }
            updateDoc(comment, {
                replies: arrayUnion(replyData)
            })
            .then(() => {
                this.replyText = ''
                this.replies= replyData
                this.numberOfReplies += 1 
            })
        },
        async deleteComment(comment_id) {
            const commentCollection = collection(firestore, 'comments');
            const comment = doc(commentCollection, comment_id)
            deleteDoc(comment)
                .then(() => {
                    bus.$emit('deleteComment', this.commentIndex)
                })
        },
    },
    computed: {
        ...mapState('authStore', ['user_id', 'username']),
        NUMBEROFREPLIES(){
                return this.numberOfReplies
        },
        replies: {
            get() {
                return this.comment.replies
            },
            set(reply) {
                this.comment.replies.push(reply)
            }
        }
    },
    watch:{

    },
    mounted(){
        this.numberOfReplies= this.comment.replies.length
    }

}
</script>

<style lang="scss" scoped>
.comments {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    transition: 0.5s ease-out;
    padding-top: 10px;

    .replies {
        padding-left: 44px;
        padding-left: 44px;
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

    
}

.comment {
    display: flex;
    justify-content: space-between;

}

.commentbox {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    animation: comein 0.4s;

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
        }
    }

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
}
</style>