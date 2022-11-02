<template>
    <div class="signup-body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="legend h1">
            Log in to Plug
        </div>
    
        <div class="info ">
            <label for="username">Email</label>
            <div style="position:relative;">
                <input @keyup.enter="logIn" v-model.lazy="email" type="text" id="username">
                <i class="bi bi-envelope"></i>
            </div>
        </div>

        <div class="info ">
            <label for="password">Password</label>
            <div style="position:relative;">
                <input v-model.lazy="password" type="password" id="text">
                <i class="bi bi-lock"></i>
            </div>
        </div>
        <div class="text-center note  ">
            Forgot password ? <span>reset</span> 
        </div>

        <button @click="login()" class="m-2">Log In</button>


        <h5  class="text-center p-2">
            <div>
                Don't have an account ? 
            </div>
            <div>
                <router-link :to="{ name: 'signUp' }">
                    <u>Sign In</u>
                </router-link>
            </div>
        </h5>
    </div>
</template>

<script>
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../firebase/firebase'
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        logIn(){
            signInWithEmailAndPassword(auth,this.email,this.password)
            .then((user)=>{
                this.$router.push({name:'home'});
            })
        }
    }
}
</script>

<style>

</style>