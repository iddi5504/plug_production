<template>
    <div ref="postBox" style="width: 100%;">
        <div  class="postcontainer d-flex flex-direction-column justify-content-around">
            <div class="top-details">
                <span>
                    <router-link :to="'/user/'+ postData.user_id">{{ postData.username }}</router-link>
                    <small class="mx-1 topic">{{ postData.postcategory }} related</small>
                </span>
                <span><i class="bi bi-three-dots"></i></span>
            </div>
            <div class="post-media">
                <img v-if="postData.mediaType == 'image'" :src="postData.postMediaUrl" class="postimage" alt="">
                <video ref="video" v-if="postData.mediaType == 'video'" width="100%" loop controls webkit-playsinline playsinline>
                    <source :src="postData.postMediaUrl+'#t=0.001'" type="video/mp4">
                </video>

            </div>
            <div style="margin: 0px 5px;" class="post-box-bottom">
                <div class="post-interactions">
                    <!--up-->
                    <span>
                        <i ref="up" :class="['bi bi-caret-up-fill', { isreactedup: postData.isreactedup }]"></i>
                        <small>{{ postData.upvotes }}</small>

                    </span>

                    <!--down-->

                    <span @click="downvote">
                        <i ref="down" :class="['bi bi-caret-down-fill', { isreacteddown: postData.isreacteddown }]"></i>
                        <small>{{ postData.downvotes }}</small>

                    </span>
                    <span @click="showComments = !showComments" style="margin:5px" class="options">
                        <!--comments-->
                        <i class="bi bi-chat-dots"></i>
                        <small>{{ postData.number_of_comments }}</small>
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
            <div>
                <div class="postdescription">
                    <h5 class="posttitle">{{ postData.postTitle }} </h5>
                    <div style="color:var(--contenttext); padding: 0px 10px;">{{ postData.postdescription }}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ['postData'],
    methods: {
        upvote(index) {

        },
        downvote(index) {
           
        },
        // isVisible(visibile,observer){
        //     if(visibile){
        //         console.log(observer)
        //         console.log(observer.intersectionRatio)
        //         if(observer.intersectionRatio > 0.8){
        //             console.log("video view is visible")
        //         }
        //     }
        // }
        
    },
    mounted(){
           if(this.postData.mediaType == "video"){
            const postBox = this.$refs.postBox;
            const observeWhen= {
                threshold:1,
                rootMargin:'-10px 0px'
            }
            const postBoxObserver= new IntersectionObserver((entry)=>{
                if(entry[0].isIntersecting && entry[0].intersectionRatio > 0.4){
                    this.$refs.video.play()
                }else{
                    this.$refs.video.pause()
                }
            }, observeWhen)
            postBoxObserver.observe(postBox);
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

    video{
        &:focus-visible{
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
</style>