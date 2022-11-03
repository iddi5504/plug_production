<template>
  <div>
    <appNav></appNav>
    <h1 style="color:white;">Hello welcome to plug</h1>
  </div>
</template>

<script>

import { getDoc, doc } from '@firebase/firestore'
import { auth, firestore } from '../firebase/firebase.js'
import appNav from '../components/appNav.vue'
export default {
  components: {
    appNav
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      const userFirestore = doc(firestore, 'users', user.uid)
      getDoc(userFirestore)
        .then((user) => {
          this.$store.dispatch('authStore/setUser', user.data(),{root:true})
        })
    })

  }
}
</script>

<style>

</style>