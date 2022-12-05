<template>
  <transition v-if="showMakePost" name="recommenddialogueanimation">
    <div class="makePostPage">
      <div id="recommeddialog" class="container">
        <div class="header">
          <h3 :class="{ topbutton: true, active: showirecommend }" @click="showirecommend = true; showpost = false">
            iRecommend
          </h3>
          <h3 :class="{ topbutton: true, active: showpost }" @click="showirecommend = false; showpost = true ">
            Post
          </h3>

        </div>
        <transition-group class="content" name="slideinirecommend">
          <form key="1" action="" id="irecommend" ref="recommend " v-show="showirecommend">
            <div class="recommenddialogcontent">
              <div class="d-flex justify-content-around flex-row ">
                <div id="imagesection">
                  <img :src="`${imageURL}`" id="recommenddialogimage" alt="" />
                </div>
                <div class="add-image-section">
                  <div>
                    <div style="text-align: left;">Add image</div>
                    <label class="typeselect add-image-label" for="file">{{ fileName }}</label>
                    <input ref="file" type="file" accept="image/*" id="file" class="add-image file" @change="getFile">
                  </div>
                  <div>
                    <div style="text-align: left;">Recommendation type</div>
                    <div>
                      <select class="typeselect genre" v-model="selectedRecommendationCategory">
                        <option v-for="(recommendtype, index) in categories" :key="index" :value="recommendtype">
                          {{ recommendtype }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div id="mainbody">
                <div name="recommend" id="recommendinput">
                  <div>
                    <label for="recommend">Recommend</label>
                    <input autocomplete="off" v-model="recommendeditem" type="text" class="inputfield"
                      placeholder="Recommend here" required />
                  </div>
                  <div>
                    <label for="genre">Genre</label>
                    <select id="genre" class="typeselect genre" v-model="selectedRecommendationGenre">
                      <option :value="recommendtype" v-for="(recommendtype, index) in selectedRecommendationType"
                        :key="index">
                        {{ recommendtype }}
                      </option>
                    </select>
                  </div>
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
                    <div v-for="(genre, index) in selectedtype" :key="index" class="genreOptions" @click="choose(genre)">
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
          <form action="" key="2" id="irecommend" ref="recommend " v-show="showpost">

            <div class="recommenddialogcontent">
              <div class="post-add-image-section">
                <!-- <img  src="../assets/music.jpg" class="addimage"> -->

                <label for="post-file" class="typeselect addimage post-image-preview">
                  <i class="bi bi-pen"></i>
                  <img v-if="isImage" class="post-image" :src="`${postFileUrl}`" alt="">
                  <video loop autoplay v-if="!isImage" class="post-image" :src="`${postFileUrl}`" alt=""></video>
                  <div v-show="!postFileUrl">
                    <i class="bi bi-plus"></i>
                    <div>Add image</div>
                  </div>
                </label>
                <input ref="postFile" accept="image/*, video/*" required type="file" id="post-file"
                  class="add-image file" @change="getPostFile">

              </div>
              <div id="mainbody">
                <div name="recommend" id="recommendinput">
                  <div>
                    <label for="postTitle">Title</label>
                    <input autocomplete="off" v-model="postTitle" type="text" class="inputfield" placeholder="Title"
                      required />
                  </div>
                  <div>
                    <label for="post-category">Select category</label>
                    <select id="post-category" class="typeselect" v-model="selectedpostcategory">
                      <option v-for="(category, index) in categories" :value="category" :key="index">{{ category }}
                      </option>
                    </select>
                  </div>
                </div>
                <div id="recommendcaption">
                  <label for="caption" class="">What do you have to say
                  </label>
                  <textarea autocomplete="off" v-model.trim="postdescription" name="postdescription"
                    class="descriptioninput" cols="30" rows="40" placeholder="Say something" required></textarea>
                </div>

                <div id="recommendationsubmit">
                  <button @click.prevent="closeMakePost" class="recommendmefinalbutton">
                    Close
                  </button>
                  <button @click.prevent="post" class="recommendmefinalbutton" type="submit">
                    Recommend
                  </button>
                </div>
              </div>
            </div>
          </form>
        </transition-group>

      </div>
    </div>
  </transition>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      Game: [
        "Action-Adventure",
        "Survival",
        "Horror",
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

      Book: [
        "Manga",
        "Fantasy",
        "Sci-Fi",
        "Action-Adventure",
        "Comedy",
        "Comic",
        "Book",
        "Satire",
        "Cook",
        "Autobiography",
        "Business",
        "Memoir",
        "Science",
      ],
      Movie: [
        "Anime",
        "Drama",
        "Action-Adventure",
        "Fantasy",
        "Crime",
        "Horror",
        "Sci-Fi",
        "Comedy",
        "ParanormalRomance",
        "Cook",
        "Autobiography",
        "Business",
        "Science",
      ],
      recommendeditem: "",
      categories: ["Music", "Book", "Movie", "Game", "Artiste", "Actor"],
      selectedRecommendationCategory: 'Music',
      content: "",
      image: "",
      submitted: false,
      show: false,
      selectedRecommendationGenre: '',
      selectedgenre: "select",
      opengenre: false,
      showrecommendme: false,
      showirecommend: true,
      showpost: false,
      recommendmedescription: "",
      postTitle: "",
      postdescription: "",
      selectedpostcategory: "",
      fileName: 'Default Image',
      file: null,
      imageBlobUrl: require('../assets/music.jpg'),
      postFileUrl: require('../assets/add-image.png'),
      postFile: null,
      postFileName: null,
      isImage: true,
      mediaType: ''
    };
  },
  computed: {

    selectedRecommendationType: function () {

      if (this.selectedRecommendationCategory === "Movie") {
        if (!this.imageBlobUrl) {
          this.imageBlobUrl = require('../assets/movie.jpg')
        }
        return this.Movie;
      }
      if (this.selectedRecommendationCategory === "Music") {
        if (!this.imageBlobUrl) {
          this.imageBlobUrl = require('../assets/music.jpg')
        }
        return this.Music;
      }
      if (this.selectedRecommendationCategory === "Game") {
        if (!this.imageBlobUrl) {
          this.imageBlobUrl = require('../assets/game.jpg')
        }
        return this.Game;
      }
      if (this.selectedRecommendationCategory === "Book") {
        if (!this.imageBlobUrl) {
          this.imageBlobUrl = require('../assets/book.jpg')
        }
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
      if (
        this.recommendeditem &&
        this.content &&
        this.selectedRecommendationCategory &&
        this.selectedRecommendationGenre
      ) {
        var recommendData = [
          {
            header: this.recommendeditem,
            content: this.content,
            category: this.selectedRecommendationCategory,
            genre: this.selectedRecommendationGenre,
            upvotes: 0,
            downvotes: 0,
            number_of_comments: 0,
            saved: false,
            postType: 'recommendation'
          },
          {
            imageName: this.fileName,
            imageFile: this.file
          }
        ];
        this.$store.dispatch('makePostStore/makeRecommendation', recommendData)
          .then(() => {
            // this.recommendeditem = ''
            // this.content = ''
            // this.selectedRecommendationCategory = 'Music'
            // this.selectedRecommendationGenre = ''
            // this.fileName = 'None chosen'
            // this.file = ''
            // this.imageBlobUrl = require('../assets/music.jpg')


          })

      } else {
        this.$store.commit('showMinorAlertMessage', 'Make sure you filled out all the fields', { root: true })
      }
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

    post() {
      if (
        this.selectedpostcategory &&
        this.postTitle &&
        this.postdescription
      ) {
        var postdata = [
          {
            postcategory: this.selectedpostcategory,
            postTitle: this.postTitle,
            postdescription: this.postdescription,
            upvotes: 0,
            downvotes: 0,
            number_of_comments: 0,
            saved: false,
            mediaType: this.mediaType,
            postType: 'post'
          },
          {
            postFile: this.postFile,
            postFileName: this.postFileName
          }
        ];
        this.$store.dispatch('makePostStore/post', postdata)
          .then(() => {
            this.selectedpostcategory = ''
            this.postTitle = ''
            this.postdescription = ''
            this.postFileUrl = require('../assets/add-image.png')
            this.postFile = null
            this.postFileName = null
            this.isImage = true
            this.mediaType = ''

          })
      }
      else {
        this.$store.commit('showMinorAlertMessage', 'Make sure you filled out all the fields', { root: true })
      }
    },
    closeMakePost() {
      this.$store.dispatch('makePostStore/closeMakePost')
    },
    getFile() {
      const file = this.$refs.file.files[0]
      if (file.size > 1048576 * 3) {
        alert('file too large')

      } else {
        this.fileName = file.name;
        this.file = file
        this.imageBlobUrl = URL.createObjectURL(file)
      }
    },
    getPostFile() {
      const file = this.$refs.postFile.files[0]
      console.log(file)
      // check file size
      if (file.size > 1048576 * 1115) {
        alert('file too large')
      } else {
        // check if file is a video
        if (file.type.includes('video')) {
          this.isImage = false
          this.mediaType = 'video'
        } else {
          this.isImage = true
          this.mediaType = 'image'
        }
        this.postFile = file
        this.postFileName = file.name
        this.postFileUrl = URL.createObjectURL(file)
      }
    }
  },

  watch: {





    // bus.$on("showrecommendialogue", (data) => {
    //   this.show = data;
    // });
    // console.log(this.selectedRecommendationCategory);
  },
};
</script>
  
<style lang="scss">
.makePostPage {
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
  height: 95%;
  max-height: 731px;
  margin-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: absolute;
  bottom: env(safe-area-inset-bottom);

  .content {
    overflow-y: auto;

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

  .genre {

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

.post-add-image-section {
  display: flex;
  justify-content: center;
  max-height: 230px;
  height: 100%;




}

#irecommend {
  .recommenddialogcontent {
    >div {
      @media only screen and (min-width: 600px) {
        display: flex;
        justify-content: space-around;
        gap: 7px;

        .add-image-section {
          display: flex;
          justify-content: center;
          gap: 17px;
          flex-direction: column;
          width: 100%;
        }
      }

    }

  }
}

.post-image-preview {
  position: relative;

  video {
    aspect-ratio: auto !important;
  }

  .bi {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 28px;
    height: 28px;
    background: var(--brandcolor);
    border-radius: 50%;
    color: black;
    font-size: 1.4rem;
  }

  .post-image {
    height: 100%;
  }
}




.header {
  display: flex;
  margin-top: 3px;
  align-items: center;
  color: var(--textcolorimportant);
  justify-content: space-around;
  height: 29px;
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
  padding: 3px 9px;
}

.recommenddialogcontent {
  display: flex;
  flex-direction: column;
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
  gap: 0px;

  div {
    width: 100%;
    max-width: 207px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  div:first-of-type {
    max-width: 308px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

}

.inputfield {
  border-width: 0px;
  background-color: var(--secondary);
  padding: 6px;
  color: var(--textcolornotimportant);
  border-radius: 5px;
  padding-left: 5px;
  font-size: 16px;
  box-shadow: var(--boxshadow);
  width: 100%;
  outline: none;
  box-sizing: border-box;
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
  max-width: 235px;
  width: 100%;
  border-radius: 5px;
  box-shadow: var(--boxshadow);

  @media screen and (min-width:600px) {
    max-width: 338px;
  }
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
  height: 100%;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  cursor: pointer;
  padding: 8px;
  box-sizing: border-box;
}

.descriptioninput {
  background: var(--secondary);
  border-radius: 5px;
  color: var(--textcolornotimportant);
  font-size: var(--bodytextfs);
  outline: none;
  max-height: 173px;
  border: none;
  margin: 3px 2px 0px 0px;
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

@keyframes showsection {
  to {
    transform: translateX(400px);

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

.file {
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
  