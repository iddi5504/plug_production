<template>
    <!-- recommendme -->
    <transition name="slideinrecommendme">
        <div class="askRecommendation-component" v-show="showAskRecommendationContainer" ref="recommendme" action="">
            <div id="askRecommendation-content">
                <div id="recommendmelable">Recommend me</div>
                <div>
                    <div style="position: relative">
                        <transition name="nextimage" tag="div" mode="out-in" appear>
                            <img key="music" v-if="recommendMeType === 'Music'" class="recommendmeimage"
                                src="../assets/music.jpg" />
                            <img key="video" v-if="recommendMeType === 'Movie'" class="recommendmeimage"
                                src="../assets/movie.jpg" />
                            <img key="game" v-if="recommendMeType === 'Game'" class="recommendmeimage"
                                src="../assets/game.jpg" />
                            <img key="book" v-if="recommendMeType === 'Book'" class="recommendmeimage"
                                src="../assets/book.jpg" />
                        </transition>

                        <i id="previous" @click="prevCategory" class="fa fa-chevron-left"></i>
                        <i id="next" @click="nextCategory" class="fa fa-chevron-right"></i>
                    </div>

                    <small id="recommendtype">{{ recommendMeType }}</small>
                </div>
                <div id="recommendmegenre">
                    <div>Genre</div>
                    <div @click="showGenres = !showGenres" name="genre" id="recommendmegenreselect">
                        {{ selectedGenre }}
                    </div>
                    <transition name="opengenre">
                        <div v-show="showGenres" class="genre-list">
                            <div v-for="(genre, index) in selectedType" @click="selectGenre(genre)" :key="index"
                                class="genre-options">
                                <input type="radio" name="category" class="radio" id="music" />
                                <label for="music">{{ genre }}</label>
                            </div>
                        </div>
                    </transition>
                </div>

                <div class="description">
                    <div>Title</div>
                    <input type="text" class="inputfield askRecommendation-name">
                </div>
                <div class="description">
                    <div>Give a brief description</div>
                    <textarea v-model="recommendMeDescription" name="description" class="descriptioninput" cols="30"
                        rows="10"></textarea>
                </div>

                <div class="bottom-buttons">
                    <button class="recommendmefinalbutton" @click.prevent="closeAskRecommendation">Close</button>
                    <button class="recommendmefinalbutton" @click.prevent="askRecommendation">
                        RecommendME
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    data() {
        return {
            recommendMeDescription: '',
            recommendMeType: 'Music',
            // selectedType: '',
            Game: [
                "Action-Adventure",
                "Survival",
                "Horror,",
                "Shooter",
                "RPG",
                "Puzzler",
                "Simulation",
                "Sports",
                "Open World",
            ],
            Music: [
                "Hip Hop",
                "Country",
                "Electronic",
                "R&B",
                "Reggae",
                "Rock",
                "Classical",
                "Jazz",
                "Dancehall",
            ],
            Movie: [
                "Action",
                "Crime",
                "Animation",
                "Drama",
                "Fantasy",
                "Horror",
                "Anime",
                "Sci-Fi",
                "Comedy",
                "Thriller",
                "Romans",
                "Western",
            ],
            Book: [
                "Action-Adventure",
                "Crime",
                "Drama",
                "Manga",
                "Fantasy",
                "Horror",
                "Sci-Fi",
                "Comedy",
                "ParanormalRomance",
                "Picture",
                "Book",
                "Satire",
                "Cook",
                "Book",
                "Autobiography",
                "Business",
                "Memoir",
                "Science",
            ],
            selectedGenre: "select",
            opengenre: false,
            categoryNumber: 1,
            showGenres: false
        }
    },
    methods: {
        askRecommendation() { },
        closeAskRecommendation() {
            this.$store.commit('askRecommendationStore/setShowAskRecommendationContainer', false)
        },

        selectGenre(genre) {
            this.selectedGenre = genre
            this.showGenres = false
        },
        nextCategory() {
            this.selectedGenre = 'Genres'
            if (this.categoryNumber == 4) {
                this.categoryNumber = 0
            }
            this.categoryNumber++;
            switch (this.categoryNumber) {
                case 1:

                    this.recommendMeType = 'Music'
                    break;
                case 2:
                    this.recommendMeType = 'Movie'
                    console.log(this.recommendMeType)
                    break;
                case 3:
                    this.recommendMeType = 'Game'
                    break;
                case 4:
                    this.recommendMeType = 'Book'
                    break;

                default:
                    break;
            }
        },
        prevCategory() {
            this.selectedGenre = 'Genres'
            if (this.categoryNumber == 1) {
                this.categoryNumber = 5
            }
            this.categoryNumber--;
            switch (this.categoryNumber) {
                case 1:
                    this.recommendMeType = 'Music'
                    break;
                case 2:
                    this.recommendMeType = 'Movie'
                    console.log(this.recommendMeType)
                    break;
                case 3:
                    this.recommendMeType = 'Game'
                    break;
                case 4:
                    this.recommendMeType = 'Book'
                    break;

                default:
                    break;
            }
        }


    },
    computed: {
        selectedType() {
            if (this.recommendMeType === "Movie") {
                return this.Movie;
            }
            if (this.recommendMeType === "Music") {
                return this.Music;
            }
            if (this.recommendMeType === "Game") {
                return this.Game;
            }
            if (this.recommendMeType === "Book") {
                return this.Book;
            }
        },
        ...mapState('askRecommendationStore', ['showAskRecommendationContainer'])
    }
}
</script>

<style lang="scss">
.askRecommendation-component {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100%;

    @media only screen and (min-width:600px) {
        height: calc(100vh - 48px);

    }

    #askRecommendation-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: var(--textcolorimportant);
        font-size: var(--bodytextfs);
        font-weight: 600;
        background: var(--primary);
        border-radius: 10px;
        padding: 14px;
        box-shadow: var(--boxshadow);
        width: 100%;
        max-width: 340px;
        margin: 10px;
        overflow-y: auto;
        gap: 3px;
        height: 532px;
        justify-content: space-around;

        @media screen and (min-width:600px) {
            max-width: 330px;
            height: 437px;
        }

        .recommendmeimage {
            height: 109px;
            width: 130px;
            border-radius: 13px;
        }

        #recommendmegenreselect {
            background: var(--brandcolor);
            width: 170px;
            border-radius: 6px;
            outline: none;
            text-align: center;
            font-size: 17px;
            color: black;
            padding: 5px;
        }

        .description {
            width: 100%;
        }


        .descriptioninput {
            max-width: 331px;
            width: 100%;
            box-sizing: border-box;
            margin: 3px;
        }


        .bottom-buttons {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }

        .genre-list {
            display: flex;
            flex-direction: column;
            background-color: var(--secondary);
            border-radius: 20px;
            width: 100%;
            overflow-y: auto;
            align-content: center;
            margin-top: 10px;
            max-height: 192px;
            font-size: 19px;
            min-width: 196px;
            color: var(--textcolornotimportant);

            .genre-options {
                display: flex;
                padding: 5px 10px;
                cursor: pointer;
                justify-content: center;

                &:hover {
                    color: var(--brandcolor);

                }
            }

            &::-webkit-scrollbar {
                background: var(--primary);
                width: 4px;
            }

            &::-webkit-scrollbar-corner {
                border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
                background: var(--secondary);
                border-radius: 10px;
                box-shadow: var(--boxshadow);
            }
        }





        .askRecommendation-name {
            max-width: 300px;
        }

        #recommendmegenre {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &::-webkit-scrollbar {
            background: var(--primary);
            width: 11px;
        }

        &::-webkit-scrollbar-corner {
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--secondary);
            border-radius: 10px;
            box-shadow: var(--boxshadow);
        }
    }
}




.nextimage-leave-to,
.nextimage-enter {
    opacity: 0;
}

.nextimage-enter-active,
.nextimage-leave-active {
    transition: all 0.5s ease-in;
}

.opengenre-leave-to,
.opengenre-enter {
    transform: translateY(0);
}

.opengenre-enter-active,
.opengenre-leave-active {
    transition: all 0.5s ease;

}


.slideinrecommendme-move,
.slideinrecommendme-leave-active,
.slideinirecommend-enter-active {
    transition: all 0.5s ease;
    transform: translateX(0)
}

.slideinirecommend-enter {
    transform: translateX(-400px);
}

.slideinirecommend-leave-to {
    transform: translateX(400px);

}

#recommendinput {
    flex: 1;
}

.typeselect {
    flex: 0.5;
}

#recommendtype {
    color: var(--textcolornotimportant);
    font-weight: lighter;
}

#textarea {
    max-height: 143px;
}


.recommendmefinalbutton {
    margin: 4px;
    font-size: 16px;
    padding: 2px 11px;
    box-shadow: var(--boxshadow);
}

#previous {
    position: absolute;
    top: 35px;
    left: -48px;
}

#next {
    position: absolute;
    top: 35px;
    right: -48px;
}
</style>