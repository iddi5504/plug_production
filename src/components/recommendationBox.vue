<template>

    <div @click="test" class="recommendation-box-component">
        <div v-bind:class="{ savedrecommend: false }" class="recommendationcontainer">
            <div class="recommendation-info">
                <span style="margin-left: 6px;">{{ recommendation.recommender_name }}</span>
                <span style="position: absolute; right: 28px; top: 4px; "><i class="bi bi-three-dots"></i></span>
            </div>
            <hr>
            <article>
                <router-link :to='"recommendation/" + recommendation.id'>
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
                </router-link>

            </article>

            <!--recommend-box-bottom-->
            <div style="margin: 0px 5px;" class="recommend-box-bottom">
                <div class="post-interactions">
                    <!--up-->
                    <span>
                        <i ref="up" :class="['bi bi-caret-up-fill', { isreactedup: recommendation.isreactedup }]"></i>
                        <small>{{ recommendation.upvotes }}</small>

                    </span>

                    <!--down-->

                    <span>
                        <i ref="down"
                            :class="['bi bi-caret-down-fill', { isreacteddown: recommendation.isreacteddown }]"></i>
                        <small>{{ recommendation.downvotes }}</small>

                    </span>
                    <span @click="showComments = !showComments" style="margin:5px" class="options">
                        <!--comments-->
                        <i class="bi bi-chat-dots"></i>
                        <small>{{ recommendation.number_of_comments }}</small>
                    </span>
                    <span style="margin:5px" class="options">
                        <i class="bi bi-arrow-repeat"></i>
                        <small>2R</small>


                    </span>
                </div>
                <div>
                    <span> 24th october 2001</span>
                </div>
            </div>
            <!--options-->
            <div v-show="showoptions" id="recommendationoptions">
                <div class="option"><i class="fa fa-bookmark"></i> Save</div>
                <div class="option"> <i class="bi bi-share"></i> Share</div>
                <div class="option"> <i class="fa fa-edit"></i> Edit</div>
                <div class="option"> <i class="bi bi-trash"></i> Delete</div>
            </div>
            <!--comments-->
            <div v-show="showComments" class="commentdialogue">
                <div class="comments">
                    <div v-for="(comment, commentindex) in comments" :key="commentindex">
                        <div class="commentbox">
                            <div class="comment">
                                <div class="comment-text">
                                    <span>
                                        <img class="userprofileimage" src="../assets/albumcover.png" alt="" srcset=" ">
                                    </span>
                                    <p class="commentcontent">{{ comment.content }}</p>
                                    <small class="commentusername">{{ comment.name }}</small>
                                </div>
                                <i class="bi bi-trash"></i>

                            </div>
                            <div class="reply-section">
                                <div></div>
                                <small> 23 replies</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p v-show="false"
                            style="display: flex; justify-content: center;  align-items:center;   position: absolute; top: 50%; left: 48%;  margin-left: -60px; font-size: 1.5em; ">
                            No comments</p>
                    </div>

                </div>
                <div class="makecomment">
                    <textarea name="comment" cols="30" rows="10" class="commentinput" v-model="comment"></textarea>
                    <button class="commentbutton">Comment</button>
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    props: ["recommendation"],
    data() {
        return {
            comment: '',
            showComments: false,
            showoptions: false,
            comments: [
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' },
                { content: 'Fuck you all ', name: 'Iddi5504' }
            ],


        }
    },
    methods: {
        test() {
            console.log("🚀 ~ file: recommendationBox.vue ~ line 152 ~ imageURL ~ this.recommendation.imageURL", this.recommendation.imageURL)

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
        }

    },
    mounted(){
       
    }

}

</script>
  
<style lang="scss" scoped>
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
    max-width: 700px;

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

        i {
            padding: 2px;
        }

        span {
            cursor: pointer;
        }
    }
}

.option:hover {
    color: var(--textcolornotimportant);
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
        transform: translateY(30px);

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
    padding-left: 16px;
    animation: show 0.5s;
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

.comments {
    display: flex;
    flex-direction: column;
    max-height: 44vh;
    overflow-y: auto;
    transition: 0.5s ease-out;
    padding-top: 10px;


    &::-webkit-scrollbar {
        width: 4px;
        border-radius: 0px 8px 8px 0;
        padding: 20px 0px;
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        width: 5px;
        background-color: var(--secondary);
        border-radius: 0px 8px 8px 0;
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
        position: relative;
    }

    .reply-section {
        align-items: center;
        display: flex;
        padding: 0px 0px 1px 44px;
        animation: 0.4s ease 0s 1 normal none running comein;

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

.makecomment {
    height: 35px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;

    .commentinput {
        width: 100%;
        background: var(--secondary);
        border: none;
        border-radius: 10px;
        color: var(--textcolornotimportant);
        padding: 2px 2px 2px 12px;
        height: 100%;
        outline: none;

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



.isreactedup {
    color: #6288f3;
}

.isreacteddown {
    color: red;
}
</style>
  