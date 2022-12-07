<template>
  <div ref="content" id="app">
    <router-view class="router-view-body" />
    <transition name="showMinorAlert">
      <minorAlert v-show="showMinorAlertMessage"></minorAlert>
    </transition>
    <loadingScreen v-show="showLoadScreen"></loadingScreen>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import loadingScreen from './components/loadingScreen.vue'
import minorAlert from './components/minorAlert.vue'
import { getDoc, doc } from '@firebase/firestore'
import { auth, firestore } from './firebase/firebase.js'
export default {
  components: {
    loadingScreen,
    minorAlert
  },
  data() {
    return {
      showNav: true,

    }
  },
  mounted() {
    const localStorageLightMode = localStorage.getItem('lightMode')
    console.log("🚀 ~ file: App.vue ~ line 39 ~ created ~ localStorageLightMode", localStorageLightMode)
    this.$store.state.lightMode = localStorageLightMode
  },
  methods: {

  },

  async beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userFirestore = doc(firestore, 'users', user.uid)
        let userId = user.uid
        getDoc(userFirestore)
          .then((userData) => {
            this.$store.dispatch('authStore/setUser', { ...userData.data(), user_id: userId }, { root: true })
          })
      }
    })

  },
  computed: {
    ...mapGetters({
      lightMode: 'LIGHTMODE',
      newRequestMade: 'recommendationsStore/NEWREQUESTMADE'
    }),
    ...mapState(['showLoadScreen', 'showMinorAlertMessage'])
  },

  watch: {
    lightMode: {
      immediate: true,
      handler(lightMode) {
        console.log(lightMode)
        if (lightMode) {
          let style = document.documentElement.style
          style.setProperty('--primary', 'white');
          style.setProperty('--secondary', 'rgb(218, 224, 230)');
          style.setProperty('--brandcolor', 'hsl(35deg 84% 50%)');
          style.setProperty('--exception', 'black');
          style.setProperty('--textcolorimportant', 'black');
          style.setProperty('--contenttext', 'black');
          style.setProperty('--textcolornotimportant', '#818384');
          //  style.setProperty('--boxshadow', 'rgba(0, 0, 0, 0.16) 0px 1px 4px;');
        }
        else {
          let style = document.documentElement.style
          style.setProperty('--primary', '#191c29');
          style.setProperty('--secondary', '#212534');
          style.setProperty('--brandcolor', 'hsl(35deg 84% 50%)');
          style.setProperty('--exception', 'white');
          style.setProperty('--textcolorimportant', 'white');
          style.setProperty('--contenttext', 'gainsboro');
          style.setProperty('--textcolornotimportant', '#818384');
          //  style.setProperty('--boxshadow', '0px 1px 7px 1px #0000009e'); 
        }
      }
    },

  }
}
</script>

<style lang="scss">
:root {
  --primary: #191c29;
  --secondary: #212534;
  --brandcolor: hsl(35deg 84% 50%);
  --exception: white;
  --textcolorimportant: white;
  --contenttext: gainsboro;
  --textcolornotimportant: #818384;
  --bodytextfs: 16px;
  --titlesfs: 20px;
  --detailsfs: 13px;
  --boxshadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  --mediumShadow: 1px 1px 2px #00000038;
}



* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
  overflow-y: auto;
  scroll-behavior: smooth;
  overflow-anchor: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;


  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background:url('./assets/backgroundone.jpg');
  background-size:cover;
  background-position: center; */
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.router-view-body {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1600px;
  width: 100%;
}

.showMinorAlert-enter-active,
.showMinorAlert-leave-active {
  transition: 0.5s all ease-in-out;
  transform: translateY(0);
}

.showMinorAlert-enter,
.showMinorAlert-leave-to {
  transform: translateY(-100px);
}

button {
  cursor: pointer;
}
</style>
