<template>
    <div class="signup-body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="legend h1">
            <div class="brand-name">Plug</div>
            <div>Discovered a really good song? Why not recommend it to others</div>
        </div>

        <div class="info ">
            <label for="username">Email</label>
            <div style="position:relative;">
                <input autocomplete="off" @keyup.enter="logIn" v-model.lazy="email" type="text" id="username">
            </div>
        </div>

        <div class="info ">
            <label for="password">Password</label>
            <div style="position:relative;">
                <input autocomplete="off" v-model.lazy="password" type="password" id="password">
            </div>
        </div>
        
        <button @click="logIn" class="authenticate-button">Log In</button>
        <div class="text-center note  ">
            Forgot password 
        </div>
        <!-- sign up with google -->
        <button @click="signInWithGoogle" class="google">Sign up with Google</button>

        <h5 class="text-center p-2">
            <div>
                Don't have an account ?
            </div>
            <div>
                <router-link :to="{ name: 'signUp' }">
                    <u>Sign Up</u>
                </router-link>
            </div>
        </h5>
    </div>
</template>

<script>
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth'
import { auth } from '../firebase/firebase'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        logIn() {
            if(this.email && this.password){
            this.$store.commit('showLoadScreen','Logging In',{root:true})
                signInWithEmailAndPassword(auth, this.email, this.password)
                    .then((user) => {
                        this.$router.push({ name: 'home' });
                    })
                    .catch((err)=>{
                        if(err.message.includes('user') || err.message.includes('found')){
                            this.$store.commit('showMinorAlertMessage', 'User not found', { root: true })  
                        }  
                        if(err.message.includes('password')){
                            this.$store.commit('showMinorAlertMessage', 'You have typed an incorrect password', { root: true })  
                        }  
                    })
                    this.$store.commit('stopLoading',null,{root:true})

            }else{
                this.$store.commit('showMinorAlertMessage', 'Make sure you filled out all the fields', { root: true })  
            }
        },
        signInWithGoogle(){
            const googleProvider= new GoogleAuthProvider
            signInWithPopup(auth, googleProvider)
            .then(()=>{
                this.$router.push({ name: 'home' });
            })
        }
    }
}
</script>

<style>

</style>