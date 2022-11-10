<template>
  <transition v-if="showMakePost" name="recommenddialogueanimation">
    <div class="makePostPage">
      <div id="recommeddialog" class="container">
        <div class="header">
          <h3 :class="{ topbutton: true, active: showirecommend }" @click="
  showrecommendme = false;
showirecommend = true;
          ">
            iRecommend
          </h3>
          <h3 :class="{ topbutton: true, active: showrecommendme }" @click="
  showrecommendme = false;
showirecommend = false;
showpost = true
          ">
            Post
          </h3>

        </div>
        <transition name="slideinirecommend">
          <form action="" id="irecommend" ref="recommend " v-show="showirecommend">
            <div class="recommenddialogcontent">
              <div class="d-flex justify-content-around flex-row ">
                <div id="imagesection">
                  <img :src="`${imageURL}`" id="recommenddialogimage" alt="" />
                </div>
                <div class="add-image-section">
                  <div>
                    <div>Add image</div>
                    <label class="typeselect add-image-label" for="file">{{ fileName }}</label>
                    <input ref="file" type="file" id="file" class="add-image" @change="getFile">
                  </div>
                  <div>
                    <div>Recommendation type</div>
                    <div>
                      <select class="typeselect genre" v-model="selectedRecommendationCategory">
                        <option v-for="(recommendtype, index) in category" :key="index">
                          {{ recommendtype }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div id="mainbody">
                <label for="recommend">What are you recommending</label>
                <div name="recommend" id="recommendinput">
                  <input autocomplete="off" v-model="recommendeditem" type="text" class="inputfield"
                    placeholder="Recommend here" required />
                  <select class="typeselect genre" v-model="selectedRecommendationCategory">
                    <option v-for="(recommendtype, index) in category" :key="index">
                      {{ recommendtype }}
                    </option>
                  </select>
                </div>
                <div id="recommendcaption">
                  <label for="caption">Say something about it
                  </label>
                  <textarea autocomplete="off" v-model.trim="content" name="recommendationcaption"
                    class="descriptioninput" cols="30" rows="40" placeholder="Say something" required></textarea>
                </div>

                <div id="recommendationsubmit">
                  <button @click.prevent="closeMakePost" class="recommendmefinalbutton">
                    Close
                  </button>
                  <button @click.prevent="recommend" class="recommendmefinalbutton" type="submit">
                    Recommend
                  </button>
                </div>
              </div>
            </div>
          </form>
        </transition>
        <!-- recommendme
        <transition name="slideinrecommendme">
          <form v-show="showrecommendme" ref="recommendme" action="">
            <div id="recommendmecontent">
              <div>
                <div id="recommendmelable">Recommend me</div>
                <div style="position: relative">
                  <transition-group name="nextimage" tag="div" appear style="overflow: hidden">
                    <img key="music" v-show="recommendmetype === 'Music'" class="recommendmeimage"
                      src="../assets/music.jpg" />
                    <img key="video" v-show="recommendmetype === 'Movie'" class="recommendmeimage"
                      src="../assets/movie.jpg" />
                    <img key="game" v-show="recommendmetype === 'Game'" class="recommendmeimage"
                      src="../assets/game.jpg" />
                    <img key="book" v-show="recommendmetype === 'Book'" class="recommendmeimage"
                      src="../assets/book.jpg" />
                  </transition-group>

                  <i @click="prev" id="previous" class="fa fa-chevron-left"></i>
                  <i @click="next" id="next" class="fa fa-chevron-right"></i>
                </div>

                <small id="recommendtype">{{ recommendmetype }}</small>
              </div>
              <div id="recommendmegenre">
                <div>Genre</div>
                <div @click="opengenre_" name="genre" id="recommendmegenreselect">
                  {{ selectedgenre }}
                </div>
                <transition name="opengenre">
                  <div v-show="opengenre" :class="{ optionscontainer: true }">
                    <div v-for="(genre, index) in selectedtype" :key="index" class="options" @click="choose(genre)">
                      <input type="radio" name="category" class="radio" id="music" />
                      <label for="music">{{ genre }}</label>
                    </div>
                  </div>
                </transition>
              </div>

              <div id="description">
                <div>Give a brief description</div>
                <textarea v-model="recommendmedescription" name="description" class="descriptioninput" cols="30"
                  rows="10"></textarea>
              </div>

              <div id="submit">
                <button class="recommendmefinalbutton">Close</button>
                <button class="recommendmefinalbutton" @click.prevent="askrecommendation">
                  RecommendME
                </button>
              </div>
            </div>
          </form>
        </transition> -->
        <!-- picturepost -->
        <div class="picturepostdialogue" v-show="false">
          <div class="d-flex justify-content-center">
            <img v-if="postmediaurl" src="../assets/music.jpg" class="addimage">


            <div v-else class="typeselect">
              <i class="bi bi-plus"></i>
              <div>Add image</div>
            </div>

          </div>
          <div id="mainbody">
            <label for="posttitle">TItle</label>
            <div name="recommend" id="recommendinput">
              <input autocomplete="off" v-model="posttitle" type="text" class="inputfield" placeholder="Title"
                required />
              <select class="typeselect" v-model="selectedpostcategory">
                <option v-for="(category, index) in postcategory" :value="category" :key="index">{{ category }}</option>
              </select>
            </div>
            <div id="recommendcaption">
              <label for="caption">What do you have to say
              </label>
              <textarea autocomplete="off" v-model.trim="postdescription" name="postdescription"
                class="descriptioninput" cols="30" rows="40" placeholder="Say something" required></textarea>
            </div>

            <div id="recommendationsubmit">
              <button @click.prevent="show = !show" class="recommendmefinalbutton">
                Close
              </button>
              <button @click.prevent="post" class="recommendmefinalbutton" type="submit">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      recommendeditem: "",
      category: ["Music", "Book", "Movie", "Game", "Artiste", "Actor"],
      selectedRecommendationCategory: "Movie",
      genre: "",
      content: "",
      image: "",
      submitted: false,
      show: false,
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
        "Electronic,",
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
      selectedgenre: "select",
      opengenre: false,
      showrecommendme: false,
      showirecommend: true,
      recommendmedescription: "",
      postmediaurl: "../assets/music.jpg",
      posttitle: "",
      postdescription: "",
      postcategory: ["Music", "Book", "Movie", "Game"],
      selectedpostcategory: "",
      fileName: 'None chosen',
      file:null,
      imageBlobUrl:require('../assets/add-image.png')
    };
  },
  computed: {
    selectedtype: function () {
      if (this.recommendmetype === "Movie") {
        return this.Movie;
      }
      if (this.recommendmetype === "Music") {
        return this.Music;
      }
      if (this.recommendmetype === "Game") {
        return this.Game;
      }
      if (this.recommendmetype === "Book") {
        return this.Book;
      }
    },
    ...mapState('makePostStore', ['showMakePost']),

    imageURL() {
        return `${this.imageBlobUrl}`

    }

  },

 
  methods: {

    recommend: function () {
      var recommendData = [
        {
        header: this.recommendeditem,
        content: this.content,
        genre: this.genre,
        category: this.selectedRecommendationCategory,
        upvotes:0,
        downvotes:0,
        isreactedup: false,
        isreacteddown: false,
        number_of_comments: 0,
        saved: false,
      },
      {
        imageName:this.fileName,
        imageFile:this.file
      }
    ];
    console.log(recommendData)
      this.$store.dispatch('makePostStore/makeRecommendation', recommendData)
      .then(()=>{
        this.submitted = true;
      })

    },

    askrecommendation: function () {
      let id = Math.random().toString().slice(2, 11);
      var recommendmedata = {
        user: "default",
        recommendmetype: this.recommendmetype,
        selectedgenre: this.selectedgenre,
        recommendmedescription: this.recommendmedescription,
        id: id,
        recommends: [],
        numberofrecommends: 0,
        showrecommendinput: false,
        showrecommendations: false,
        recommendsucess: false,
      };
      // this.$http
      //   .post("http://localhost:3000/recommendme", recommendmedata)
      //   .then((recommendmedata_) => {
      //     bus.$emit("recommendmedata", recommendmedata_);
      //   });
    },

    next: function () {
      this.recommendmetypeindex++;

      if (this.recommendmetypeindex === this.recommendmetypes.length) {
        this.recommendmetypeindex = 0;
      }
      this.recommendmetype = this.recommendmetypes[this.recommendmetypeindex];
    },
    prev: function () {
      this.recommendmetypeindex--;
      if (this.recommendmetypeindex === 0) {
        this.recommendmetypeindex = 3;
      }
      this.recommendmetype = this.recommendmetypes[this.recommendmetypeindex];
    },

    opengenre_: function () {
      this.opengenre = !this.opengenre;
    },
    choose: function (chose) {
      this.selectedgenre = chose;
      this.opengenre = !this.opengenre;
    },

    post: function () {
      var postdata = {
        recommender_id: "Default",
        item: "Post",
        postcategory: this.selectedpostcategory,
        posttitle: this.posttitle,
        postdescription: this.postdescription,
        ups: 0,
        downs: 0,
        isreactedup: false,
        isreacteddown: false,
        numberofcomments: 0,
        id: id,
        postmediaurl: this.postmediaurl,
        saved: false,
        date:null
      };
      console.log(postdata)

    },
    closeMakePost() {
      this.$store.dispatch('makePostStore/closeMakePost')
    },
    getFile() {
      const file = this.$refs.file.files[0]
      this.fileName = file.name;
      this.file=file
      this.imageBlobUrl=URL.createObjectURL(file)
      console.log("🚀 ~ file: makePost.vue ~ line 386 ~ getFile ~ this.imageBlobUrl", this.imageBlobUrl)
    }
  },

  created() {
    // bus.$on("showrecommendialogue", (data) => {
    //   this.show = data;
    // });
    // console.log(this.selectedRecommendationCategory);
  },
};
</script>
  
<style lang="scss" scoped>
.makePostPage {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100%;
  @media only screen and (min-width:600px){
    height: calc(100vh - 48px);

  }
}

#recommeddialog {
  width: 100%;
  background: var(--primary);
  border-radius: 20px;
  display: flex;
  transition: 0.3s ease-out;
  flex-direction: column;
  box-shadow: var(--boxshadow);
  overflow: hidden;
  font-size: 16px;
  color: white;
  height: calc(100vh - 49px);
  /* max-height: 731px; */
  margin-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: absolute;
  bottom: env(safe-area-inset-bottom);
  .genre {
    max-width: 130px;
    
      @media only screen and (min-width:600px) {
        max-width: 100%;
      }

  }

  #mainbody {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 1;
    text-align: left;
  }

}




.header {
  display: flex;
  margin-top: 3px;
  color: var(--textcolorimportant);
  justify-content: space-around;
}

#firstsection {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: center;
}

#recommendsomething {
  flex: 1;
  justify-content: center;
  display: flex;
  padding: 0 17px 0 1px;
}

#irecommend {
  flex: 1;
  justify-content: center;
  display: flex;
  padding-left: 9px;
}

.recommenddialogcontent {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
  color: var(--textcolorimportant);
  padding: 4px 6px;
}

#imagesection {
  display: flex;
  flex-direction: column;
  padding-top: 11px;
  align-content: center;
  justify-content: center;
  align-items: center;

}

#addimagebutton {
  padding: 0px 27px;
  background-color: var(--secondary);
}

#addimagebutton:focus-within {
  box-shadow: var(--boxshadow);
}


#recommendinput {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.inputfield {
  border-width: 0px;
  background-color: var(--secondary);
  padding: 1px;
  color: var(--textcolornotimportant);
  border-radius: 5px;
  height: 33px;
  padding-left: 5px;
  font-size: 16px;
  box-shadow: var(--boxshadow);
  max-width: 297px;
  width: 100%;
  outline: none;
}

.typeselect {
  border-width: 0;
  background-color: var(--secondary);
  border-radius: 5px;
  box-shadow: var(--boxshadow);
  color: var(--textcolornotimportant);
  outline: none;
  flex-grow: 0.5;
  padding: 8px;
  width: 100%;

}

#recommendcaption {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#recommendcaptioninput {
  outline: none;
  border-width: 0px;
  background-color: transparent;
  color: var(--textcolornotimportant);
  border-radius: 5px;
  height: 133px;
  padding-left: 5px;
  font-size: 16px;
  margin: 2px 9px 2px 9px;
  padding: 0 7px 95px;
  box-shadow: var(--boxshadow);
  overflow: hidden;
  max-height: 146px;
  flex: 1;
}

.recommenddialogcontent label {
  color: var(--textcolorimportant);
}

#recommenddialogimage {
  width: 124px;
  border-radius: 5px;
  box-shadow: var(--boxshadow);
}

#recommendationsubmit {
  display: flex;
  justify-content: end;
  margin: 8px;
}

#cancelrecommendation {
  width: 77px;
  height: 32px;
  font-size: 19px;
  background-color: var(--secondary);
  border-radius: 7px;
  box-shadow: var(--boxshadow);
  margin: 0 3px 0 2px;
}

#cancelrecommendation:hover {
  background-color: #ec3131;
}

#submitrecommendation {
  font-size: 19px;
  background-color: var(--secondary);
  border: 1px black solid;
  border-radius: 7px;
  box-shadow: var(--boxshadow);
  margin: 0 2px;
}

#submitrecommendation:hover {
  background-color: #56ec31;
  box-shadow: var(--boxshadow);
}

.topbutton {
  font-size: 20px;
}

label {
  font-size: 1rem;
}

.optionscontainer {
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 20px;
  width: 100%;
  overflow-y: auto;
  align-content: center;
  transition: 0.5s ease;
  margin-top: 10px;
  max-height: 192px;
  font-size: 19px;
  min-width: 196px;
  color: var(--textcolornotimportant);
}

.optionscontainer::-webkit-scrollbar {
  width: 4px;
  background-color: var(--secondary);
  border-radius: 0px 8px 8px 0;
  padding: 20px 0px;
  height: 10px;
}

.optionscontainer::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: black;
  border-radius: 0px 8px 8px 0;
}

.options {
  display: flex;
  padding: 5px 10px;
  cursor: pointer;
  justify-content: center;
}

.optionscontainer .options:hover {
  background-color: #414b57;
}

.radio {
  display: none;
}

input {
  font-size: 16px;
}

select {
  font-size: 16px;
}

.active {
  color: var(--brandcolor);
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

.recommendmeimage {
  height: 109px;
  width: 130px;
  border-radius: 13px;
}

#recommendmecontent {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--textcolorimportant);
  font-size: var(--bodytextfs);
  font-weight: 600;
}

#recommendmegenreselect {
  background: var(--brandcolor);
  width: 170px;
  border-radius: 6px;
  outline: none;
  text-align: center;
  font-size: 20px;
  color: black;
}

#recommendmegenre {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.addimage {
  width: 200px;
  height: 129px;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
}

.descriptioninput {
  background: var(--secondary);
  border-radius: 8px;
  color: var(--textcolornotimportant);
  font-size: var(--bodytextfs);
  outline: none;
  max-height: 173px;
  border: none;
  margin: 10px 2px 0px 0px;
  padding: 5px 10px;
  box-shadow: var(--boxshadow);

  @media only screen and (min-width:600px) {
    max-height: 100px;
    font-size: 16px;
    padding: 3px;
  }
}

#description {
  padding: 10px 0px;
}

#recommendtype {
  color: var(--textcolornotimportant);
  font-weight: lighter;
}

.recommendmefinalbutton {
  color: black;
  border: none;
  margin: 7px;
  background: var(--brandcolor);
  font-size: 16px;
  border-radius: 5px;
  padding: 10px;

  &:nth-last-of-type(2) {
    background: #ff4200;
  }
}

.recommenddialogueanimation-enter {
  transform: translateY(550px);
}

.recommenddialogueanimation-enter-active {
  transition: all 0.8s ease;
}

.recommenddialogueanimation-leave-to {
  transform: translateY(550px);
  opacity: 0;
}

.recommenddialogueanimation-leave-active {
  transition: all 0.8s ease;
}

.nextimage-enter {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
}

.nextimage-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.nextimage-enter.active {
  transition: all 0.5s ease;
  position: absolute;
  overflow: hidden;
  opacity: 1;
}

.nextimage-leave.active {
  transition: all 0.1s ease;
  position: absolute;
  overflow: hidden;
  opacity: 1;
}

.nextimage-move {
  transition: all 0.5s;
  transform: translateY(0px);
}

.opengenre-enter {
  max-height: 0px;
}

.opengenre-leave-to {
  max-height: 0px;
}

.opengenre-enter,
.opengenre-leave-to {
  transition: all 0.5s ease;
}

.opengenre-move {
  transition: all 0.4s ease;
}

.slideinrecommendme-enter {
  transform: translateX(400px);
}

.slideinrecommendme-leave-to {
  transform: translateX(400px);
  position: absolute;
  top: 40px;
}

.slideinrecommendme-move {
  transition: all 0.5s ease;
}

.slideinrecommendme-enter-active,
.slideinrecommendme-leave-active,
.slideinirecommend-leave-active,
.slideinirecommend-enter-active {
  transition: all 0.5s ease;
}

.slideinirecommend-enter {
  transform: translateX(-400px);
}

.slideinirecommend-leave-to {
  transform: translateX(-400px);
  position: absolute;
  top: 40px;
}

.slideinrecommendme-move {
  transition: all 3s ease;
}

@keyframes slidein {
  from {
    transform: translateX(-300px);
  }

  to {
    transform: translateX(0);
  }
}

.add-image-section {
  display: flex;
  justify-content: space-between;
  gap: 17px;

  >div {
    width: 100%;
  }
}

#file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
}

.add-image-label {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 7px 0;
  background-image: url('../assets/loupe.png');
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 5px center;

}

/* .add-image::-webkit-file-upload-button {
  visibility: hidden;
}
.add-image::before {
  content: 'Select some files';
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.add-image:hover::before {
  border-color: black;
}
.add-image:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
} */

@media only screen and (min-width:600px) {
  #recommeddialog {
    max-width: 579px;
    max-height: 455px;
    width: 100%;
    border-radius: 20px;
    position: static;
  }


  #imagesection {
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    align-content: center;
    justify-content: center;
    align-items: center;
  }


  #recommendinput {
    flex: 1;
  }

  .inputfield {
    flex: 0.7;
  }

  .typeselect {
    flex: 0.5;
  }

  #textarea {
    max-height: 143px;
  }


  .recommendmefinalbutton {
    margin: 4px;
    font-size: 16px;
    padding: 2px 11px;
  }
}
</style>
  