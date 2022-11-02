<template>
  <div id="app">
    <appNav v-if="showNav"></appNav>
    <router-view />
  </div>
</template>

<script>
import { getDoc, doc } from '@firebase/firestore'
import { auth, firestore } from './firebase/firebase.js'
import appNav from './components/appNav.vue'
export default {
  components: {
    appNav
  },
  data() {
    return {
      showNav: true
    }
  },
  beforeMount() {

  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      const userFirestore = doc(firestore, 'users', user.uid)
      getDoc(userFirestore)
        .then((user) => {
          this.$store.dispatch('setUser', user.data())
        })
    })

  },
  watch: {
    $route: {
      handler() {
        // check if route is authentication route
        if (this.$route.name == 'logIn' || this.$route.name == 'signUp') {
          this.showNav = false;
        }
        console.log('route changed')

      },
      immediate: true

    }
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
  --detailsfs: 0.875rem;
  --boxshadow: 2px 3px 7px #131111b8;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
</style>
