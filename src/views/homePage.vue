<template>
  <div>
    <appNav></appNav>
    <div class="home-body">
      <div class="main-content">
        <todaysRecommendation></todaysRecommendation>
        <sectionButton></sectionButton>
        <categoryBar class="categoryBar"></categoryBar>
      </div>
      <div class="side-content">
          <!--  -->
      </div>
    </div>
    <!-- Call to action components -->
    <appModal></appModal>
    <makePost></makePost>
    <majorAlert></majorAlert>
  </div>
</template>

<script>

import { getDoc, doc } from '@firebase/firestore'
import { auth, firestore } from '../firebase/firebase.js'
import appNav from '../components/appNav.vue'
import modal from '../components/modal.vue'
import makePost from '../components/makePost.vue'
import majorAlert from '../components/majorAlert.vue'
import todaysRecommendation from '../components/todaysRecommendation.vue'
import categoryBar from '../components/categoryBar.vue'
import sectionButton from '../components/sectionButton.vue'

export default {
  components: {
    appNav,
    appModal:modal,
    makePost,
    majorAlert,
    todaysRecommendation,
    categoryBar,
    sectionButton
    
  },
  async beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if(user){
        const userFirestore = doc(firestore, 'users', user.uid)
        getDoc(userFirestore)
          .then((user) => {
            this.$store.dispatch('authStore/setUser', user.data(),{root:true})
          })
      }
    })

  }
}
</script>

<style lang="scss">
.home-body{
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  align-content: flex-start;
  margin-top: 58px;

  .main-content{
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    max-width: 700px;
    min-width: 300px;
    
    .categoryBar{
      width: 100%;
    }
  }

  .side-content{
    padding: 0px;
    margin: 0px 16px;
    background-color: var(--primary);
    z-index: 0;
    display: none;
    flex-direction: column;
    height: 475px;
    font-family: sans-serif;
    border-radius: 10px;
    margin-top: 10px;
    width: 287px;
    color: var(--textcolorimportant);
    font-size: larger;
    box-shadow: var(--boxshadow);
    position: relative;

    @media all and (min-width: 900px){
      display: flex;

    }

    /*width: 100%;
    max-width:400px;
    display: none;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    background: grey;
    @media all and (min-width: 900px){
      display: flex;

    }*/
  }
}
</style>