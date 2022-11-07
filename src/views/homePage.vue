<template>
  <div>
    <appNav></appNav>
    <appModal></appModal>
    <h1 style="color:white;">Hello welcome to plug</h1>
  </div>
</template>

<script>

import { getDoc, doc } from '@firebase/firestore'
import { auth, firestore } from '../firebase/firebase.js'
import appNav from '../components/appNav.vue'
import modal from '../components/modal.vue'

export default {
  components: {
    appNav,
    appModal:modal
  },
  beforeCreate() {
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

<style>

</style>