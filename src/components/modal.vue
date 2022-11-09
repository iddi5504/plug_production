<template>
    <div>
        <transition name="slide">
            <div v-show="showModal" id="searchsection">
                <i type="button" @click="closemodal_" class="bi bi-x" id="closesearchsection">
                </i>

                <!-- <div id="searchbar">
                <i class="bi bi-search" style="font-size: 20px; color: white; position:absolute; top: 26px; left: 16px;" ></i>
                <input ref="input" v-on:keyup.enter="search" type="text" id="searchinput" placeholder="Search Recommendhub" v-model="searchinput" >
                <i @click="clearsearch" v-show="searchinput" id="clearsearch" class="bi bi-x"> </i>
            </div> -->
                <!--searchsectiondescover-->
                <transition name="showdisoversection">
                    <div ref="discoversection" id="discoversection" class="container">
                        <h3>Discover</h3>

                        <div id="searchsectiontoprecommends" class="container">
                            <div class="title">Top Recommends</div>
                            <div class="images">
                                <div>
                                    <img class="discover-image" src="../assets/gadget.jpg" alt="">
                                    <div class="item-name">Attack on titan</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/EternalAtake.jpg" alt="">
                                    <div class="item-name">Attack on titan</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/godofwar4.jpg" alt="">
                                    <div class="item-name">Death Note</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/albumcover.png" alt="">
                                    <div class="item-name">One piece</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/hiphop.jpg" alt="">
                                    <div class="item-name">Death Note</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/gadget.jpg" alt="">
                                    <div class="item-name">One piece</div>
                                </div>

                            </div>
                            <!--buttons-->
                            <button style="border: 0px; background-color: inherit;" class="prev-button-one button">
                                <img src="../assets/back.png" alt="" class="button-image" type>
                            </button>
                            <button class="next-button-one button">
                                <img src="../assets/next.png" alt="" class="button-image">
                            </button>


                        </div>
                        <div class="searchsectionhottest ">
                            <div class="title">Top Discussions</div>
                            <div class="images">
                                <div>
                                    <img class="discover-image" src="../assets/gadget.jpg" alt="">
                                    <div class="item-name">Attack on titan</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/EternalAtake.jpg" alt="">
                                    <div class="item-name">Attack on titan</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/EternalAtake.jpg" alt="">
                                    <div class="item-name">Death Note</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/godofwar4.jpg" alt="">
                                    <div class="item-name">One piece</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/EternalAtake.jpg" alt="">
                                    <div class="item-name">Death Note</div>
                                </div>
                                <div>
                                    <img class="discover-image" src="../assets/godofwar4.jpg" alt="">
                                    <div class="item-name">One piece</div>
                                </div>

                            </div>
                            <button style="border: 0px; background-color: inherit;" class="prev-button-two button">
                                <img src="../assets/back.png" alt="" class="button-image" type>
                            </button>
                            <button class="next-button-two button">
                                <img src="../assets/next.png" alt="" class="button-image">
                            </button>
                        </div>
                        <!-- recommenders to follow -->
                        <div class="recommender-to-follow">
                            <div class="title">Here are some recommender to follow</div>
                            <div class="cards">
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                                <div class="card">
                                    <div>
                                        <img class="profile" src="../assets/hiphop.jpg" alt="">
                                        <div>Username</div>
                                        <div class="number-of-recommendations">16 recommendations</div>
                                    </div>
                                    <div>
                                        <button class="follow-button">Follow</button>
                                    </div>

                                </div>
                            </div>
                            <button style="border: 0px; background-color: inherit;"
                                class="prev-button-three button">
                                <img src="../assets/back.png" alt="" class="button-image" type>
                            </button>
                            <button class="next-button-three button">
                                <img src="../assets/next.png" alt="" class="button-image">
                            </button>
                        </div>

                        <!-- empty -->
                        <div class="empty"></div>

                    </div>

                </transition>


            </div>
        </transition>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    component: {
    },

    props: ["recommendations"],

    data() {
        return {

        }
    },
    created() {


    },
    methods: {
        closemodal_: function () {
            this.$store.dispatch('modalStore/toggleModal', false);

        }

    },


    computed: {
        ...mapGetters({
            showModal: 'modalStore/SHOWMODAL'
        })
    },

    watch: {

    }


}
</script>

<style lang="scss" scoped>
#searchsection {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    max-width: 429px;
    height: calc(100vh - 48px);
    position: fixed;
    left: 0px;
    z-index: 1;
    top: 0px;
    overflow-y: auto;
    margin-top: 48px;
    overflow-x: hidden;

    #closesearchsection {
        font-size: 30px;
        color: var(--textcolornotimportant);
        position: absolute;
        right: 0px;
        top: 1px;
        z-index: 1;
    }
    .recommender-to-follow{
        position: relative;
    }

    #discoversection {
        padding: 0px;
        margin: 0px;
        background-color: transparent;
        color: var(--textcolorimportant);
        z-index: -1;
        display: flex;
        flex-direction: column;
        font-family: sans-serif;
        border-radius: 10px;
        margin-top: 10px;
        width: 100%;
        >h3{
            text-align: left;
            padding: 5px 10px;
            font-size: 1.4rem;
        }
        #searchsectiontoprecommends {
            margin: 0px;
            padding: 0;
            position: relative;
            overflow-x: hidden;
            position: relative;

        }

        .discover-image {
            border-radius: 9px;
            height: 184px;
            width: 127px;
            padding: 2px 3px;
            z-index: -1;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .title {
            font-size: 1.2rem;
        }

        .images {
            display: flex;
            overflow-x: auto;
            flex-direction: row;
            gap: 6px;
            padding: 11px;
            position: relative;

            &::-webkit-scrollbar {
                display: none;
            }

            >div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }

    }
    .empty{
        height: 100px;
        width: 100%;
        max-width: 100px;

    }


    .cards {
        display: flex;
        overflow-x: auto;
        flex-direction: row;
        gap: 6px;
        padding: 11px;
        position: relative;

        &::-webkit-scrollbar {
            display: none;
        }

        .card {
            gap: 13px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 11px;
            height: 100%;
            background: var(--secondary);
            border-radius: 16px;
            min-width: 135px;
            position: relative;
            ;

            .number-of-recommendations {
                color: var(--textcolornotimportant);
                font-size: 0.8rem;
            }

            .profile {
                width: 100px;
                object-fit: cover;
                height: 100px;
                border-radius: 50%;
            }

            >div {
                display: flex;
                flex-direction: column;
                align-content: center;
                align-items: center;
            }

            .follow-button {
                padding: 6px;
                border: none;
                box-shadow: var(--boxshadow);
                border-radius: 4px;
                font-size: 1rem;
                background: var(--brandcolor);
                font-weight: 700;
                color: black;
                margin: 3px;
                width: 100%;
                max-width: 316px;
                cursor: pointer;

                &:hover {
                    background-color: var(--brandcolor);

                }
            }
        }

    }
}

.searchsnippnet {
    font-size: 16px;
    word-break: break-word;
    color: var(--textcolornotimportant);
}

.boldtext {
    font-size: 18px;
    font-weight: 500;
    color: var(--textcolorimportant);
}





.searchsectiontoprecommendimages {
    display: flex;
    justify-content: flex-start;
    box-shadow: var(--boxshadow);
}



.searchsectionhottest {
    margin: 0px;
    position: relative;


}

.searchsectionhotdiscussionsimages {
    padding: 0;
    margin: 0;
    overflow-x: auto;
    height: 185px;
    display: flex;
    justify-content: flex-start;
}

.searchsectionhotdiscussionsimages::-webkit-scrollbar {
    display: none;
}

.discover-image {
    height: 184px;
    width: 127px;
    padding: 2px 5px;
    border-radius: 10px;

}


.prev-button-two {
    top: 92px;
    left: 4px;
}

.next-button-two {
    top: 92px;

    right: 19px;

}

.prev-button-three {
    top: 92px;
    left: 4px;
}

.next-button-three {
    top: 92px;
    right: 19px;

}

#searchsection::-webkit-scrollbar {
    display: none;
}

#searchcontent {
    display: flex;
    flex-direction: column;
    transition: 0.5s ease;

}

#searchbar {
    padding: 0px 0 11px 6px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 11 0 0 0;
    position: relative;
}

#p {
    display: none;
    font-size: 16px;
    color: red;
    position: absolute;
    top: 38px;
    right: 10px;
    padding: 1 6 1 6;
    background: var(--textcolornotimportant);
    border-radius: 10px;
}

#clearsearch {
    top: 18px;
    right: 40px;
    position: absolute;
    z-index: 1;
    font-size: 30px;
    color: var(--textcolornotimportant);
}

#clearsearch:hover {
    color: white;
}

#searchinput {
    margin: 16px 0 0 0px;
    border: none;
    background: var(--primary);
    border-radius: 6px;
    box-shadow: var(--boxshadow);
    width: 358px;
    height: 49px;
    color: var(--textcolornotimportant);
    padding: 1px 29px 1px 34px;
    font-variant-caps: all-small-caps;
    outline: none;
    font-size: larger;
}



#searchresults {
    display: block;
    flex-direction: column;
    flex: 1;
    color: var(---textcolorimportant);
    padding: 12px;
}

#searchresults :hover {
    background: #151a28;
}

.slick-slide {
    width: 132px;
    width: 141px;
}


.container {
    padding-left: 0 !important;
    padding-right: 0 !important;

}

.slick-track {
    width: 753px;
}



.button-image {
    height: 30px;
    width: 30px;

}

.button {
    position: absolute;
    z-index: 0;
    cursor: pointer;
    border: none;
    filter: invert(1);
    background: none;
}

.next-button-one {
    top: 89px;
    right: 21px;
}

.prev-button-one {
    top: 89px;
    left: 4px;
}

#closesearchsection:hover {
    color: red !important;
}

.slide-enter {
    transform: translateX(-450px);
}

.slide-enter-active {
    transition: all 0.8s ease;
}

.slide-leave-to {
    transform: translateX(-450px);

}

.slide-leave-active {
    transition: all 0.5s ease;

}



.showdisoversection-enter-from {
    transform: translateY(-550px);
}

.showdisoversection-enter-active {
    transition: all 0.8s ease;
}

.showdisoversection-leave-to {
    transform: translateY(-550px);

}

.showdisoversection-leave-active {
    transition: all 0.8s ease;

}


@media only screen and (max-width: 450px) {
    #searchsection {
        width: 100%;
    }
}
</style>