<template>
    <div @click="test" >
        <div ref="categorybar" id="categorybar">
            <div @click="selectCategory('all')" class="category">
                <div :class="{ categoryactive: currentcategory_ === '' }">
                    <i class="bi bi-emoji-smile-upside-down genreemoji categoryicon"> </i>
                    <p>New</p>

                </div>
            </div>
            <div @click="selectCategory('Games')" class="category">
                <div :class="{ categoryactive: currentcategory_ === 'Games' }">
                    <i class="bi bi-controller genreemoji categoryicon"> </i>
                    <p>Games</p>

                </div>
            </div>
            <div @click="selectCategory('Musics')" class="category">
                <div :class="{ categoryactive: currentcategory_ === 'Musics' }">
                    <i class="bi bi-music-note-beamed genreemoji categoryicon"> </i>
                    <p>Music</p>
                </div>
            </div>
            <div @click="selectCategory('Movies')" class="category">
                <div :class="{ categoryactive: currentcategory_ === 'Movies' }">
                    <i class="bi bi-film genreemoji categoryicon"> </i>
                    <p>Movie</p>

                </div>

            </div>
            <div @click="selectCategory('Books')" class="category">
                <div :class="{ categoryactive: currentcategory_ === 'Books' }">
                    <i class="bi bi-book genreemoji categoryicon"> </i>
                    <p>Books</p>
                </div>
            </div>
        </div>
        <!-- genre -->
        <div class="genres" v-show="showGenres" @mouseover="showGenreOnHover" @mouseleave="hideGenreOnHover">
            <div v-for="genre in currentcategory" :key="genre">
                <div class="genre">{{ genre }}</div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    data() {
        return {

            movie: ["Action", "Crime", "Drama", "Animation", "Fantasy", "Anime", "Horror", "Sci-Fi", "Comedy", "Romans", "Thriller", "Western"],
            music: ["Hip Hop", "Jazz", "Country", "Electronic", "Rock", "R&B", "Classical", "Reggae", "Dancehall",],
            games: ["Action-Adventure", "Survival Horror", "Shooter", "RPG", "Puzzler", "Simulation", "Sports", "Open World"],
            books: ["Action-Adventure", "Crime", "Drama", "Manga", "Fantasy", "Horror", "Sci-Fi", "Comedy", "Paranormal Romance", "Picture Book", "Satire", "Cook Book", "Autobiography", "Business", "Memoir", "Science"],
            currentcategory: null,
            currentcategory_: "",
            lightmode: false,
            showGenres: false

        }
    },
    watch: {
        //  currentcategory_(category){
        //     bus.$emit("category", category)
        //     console.log(category)
        //  },

    },

    created() {
        //   bus.$on("lightmode" , (lightmode)=>{
        //       this.lightmode=lightmode
        //   })
    },
    methods: {
        selectCategory(category) {
            this.showGenres = true;
            setTimeout(() => {
                this.showGenres = false;
            }, 12000);
            if (category == 'all') {
                this.$store.commit('recommendationsStore/setCategory', category);
                this.currentcategory_ = category
            }
            if (category == 'Books') {
                this.$store.commit('recommendationsStore/setCategory', category);
                this.currentcategory = this.books;
                this.currentcategory_ = category
            }
            if (category == 'Movies') {
                this.$store.commit('recommendationsStore/setCategory', category);
                this.currentcategory = this.movie;
                this.currentcategory_ = category
            }
            if (category == 'Musics') {
                this.$store.commit('recommendationsStore/setCategory', category);
                this.currentcategory = this.music;
                this.currentcategory_ = category
            }
            if (category == 'Games') {
                this.$store.commit('recommendationsStore/setCategory', category);
                this.currentcategory = this.games;
                this.currentcategory_ = category
            }
        },
        showGenreOnHover() {
            this.showGenres = true
        },
        hideGenreOnHover() {
             setTimeout(() => {
                this.showGenres = false;
            }, 2000);
        },
        test(){
            this.$store.dispatch('recommendationsStore/lazyLoadPosts')


        }
    }



}
</script>

<style lang="scss" scoped>
.categoryBar {
    width: 100%;
    padding: 2px 9px;
    box-sizing: border-box;
}

#categorybar {
    padding: 2px 4px;
    color: var(--textcolorimportant);
    display: flex;
    background-color: var(--primary);
    justify-content: space-around;
    align-content: center;
    justify-items: center;
    border-radius: 10px;
    box-shadow: var(--boxshadow);
    animation: comein ease 0.5s;

}

@keyframes comein {
    from {
        transform: translateY(-100px);
    }

    to {
        transform: translateY(0px);
    }
}

.genreemoji {
    font-size: 2em;
    line-height: 1;
}

.category {
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

p {
    margin-top: 0;
    line-height: 1;
    margin-bottom: 0;
}

.genres {
    width: 100%;
    display: flex;
    justify-content: start;
    overflow-x: auto;
    word-break: normal;
    margin: 6px 3px;
    gap: 11px;
}

.genres::-webkit-scrollbar {
    display: none;
}

.genre {
    border-radius: 8px;
    background: var(--primary);
    color: var(--textcolornotimportant);
    padding: 2px 10px;
    white-space: nowrap;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.09);
    }
}

.categoryactive {
    color: var(--brandcolor);

}
</style>