<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 
  data() {
    return {
      showNav: true,

    }
  },
  beforeMount() {
   
  },
  created(){
  },
  computed:{
    ...mapGetters({
      lightMode:'LIGHTMODE'
    })
  },
  
  watch: {
    lightMode:{
      immediate:true,
      handler(lightMode){
        if(lightMode){
          let style=document.documentElement.style
           style.setProperty('--primary', 'white');
           style.setProperty('--secondary', 'rgb(218, 224, 230)');
           style.setProperty('--brandcolor', 'hsl(35deg 84% 50%)');
           style.setProperty('--exception', 'black');
           style.setProperty('--textcolorimportant', 'black');
           style.setProperty('--contenttext', 'black');
           style.setProperty('--textcolornotimportant', '#818384'); 
           style.setProperty('--boxshadow', '0px 1px 2px 1px #d1d1d1');
        }
        else{
           let style=document.documentElement.style
           style.setProperty('--primary', '#191c29');
           style.setProperty('--secondary', '#212534');
           style.setProperty('--brandcolor', 'hsl(35deg 84% 50%)');
           style.setProperty('--exception', 'white');
           style.setProperty('--textcolorimportant', 'white');
           style.setProperty('--contenttext', 'gainsboro');
           style.setProperty('--textcolornotimportant', '#818384');
           style.setProperty('--boxshadow', '0px 1px 7px 1px #0000009e'); 
        }
      }
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
  background:url('./assets/backgroundone.jpg');
  background-size:cover;
  background-position: center;
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
