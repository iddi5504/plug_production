<template>
    <div class="signup-body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="legend h1">
            Create an iClass account
        </div>
        <div class="info ">
            <label for="username">Username</label>
            <div style="position:relative;">
                <input @keyup.enter="signUp" v-model.lazy="username" type="text" id="username">
                <i class="bi bi-person"></i>
            </div>
        </div>
        <div class="info ">
            <label for="username">Email</label>
            <div style="position:relative;">
                <input @keyup.enter="signUp" v-model.lazy="email" type="text" id="username">
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
            Password must be more than six characters long in length
        </div>

        <button @click="signUp" class="m-2">Sign Up</button>


        <h5  class="text-center p-2">
            <div>
                Already have an account
            </div>
            <div>
                <router-link :to="{ name: 'logIn' }">
                    <u>Sign In</u>
                </router-link>
            </div>
        </h5>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword } from '@firebase/auth'
import {auth,firestore} from '../firebase/firebase'
import { collection, doc, setDoc } from '@firebase/firestore'
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            if(this.username && this.email && this.password){
                createUserWithEmailAndPassword(auth,this.email,this.password)
                .then((user)=>{
                    console.log(user)
                    const users= collection(firestore,'users')
                    const this_user= doc(users,user.user.uid)
                    setDoc(this_user,{
                        email:this.email,
                        username:this.username
                    })
                    .then(()=>{
                        this.$router.push({name:'home'});
                    })
                })
            }
            else{
                console.log(
                "this happened: "
            )
            }

        }
    }
}
</script>

<style lang="scss">
.signup-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background: var(--primary);
    color: white;
    border-radius: 10px;
    padding: 13px 5px;
    font-size: 1.3rem;
    .note{
        max-width: 37ch;
    }
    .info{
        text-align: left;
        width: 100%;
        max-width: 348px;
    }
    label{
        font-size: 1.6rem;
        padding: 10px;
        @media only screen and (min-width:700px){
            font-size: 1.4em;
        }
    }
    .legend{
        font-weight: 600;
        padding: 1.2rem 10px;
        color: var(--brandcolor);
        font-size: 2rem;
        line-height: 28px;
        @media only screen and (min-width:700px){
            font-size: 1.7em;
        }
    }
    input {
        height: 42px;
        width: 100%;
        box-sizing: border-box;
        padding: 4px;
        margin: 5px;
        border: none;
        font-size: 23px;
        border-radius: 5px;
        box-shadow: var(--boxshadow);
        color: #bcc2c5;
        background: var(--secondary);
        outline: none;
        transition: all 0.5s ease;

        &::placeholder {
            color: var(--textColor);
        }

        &:focus-within {
            transition: all 0.5s ease;
            border-radius: 12px;
            transform: scale(1.02);
        }

        &:hover {
            border: 1px solid var(--secondaryBackgroundColor);
            transition: all 0.5s ease;

        }
    }

    button {
        padding: 10px;
        border: none;
        box-shadow: 0px 0px 4px black;
        border-radius: 4px;
        font-size: 20px;
        background: var(--brandcolor);
        font-weight: 700;
        color: black;
        margin: 10px;
    }

    @media only screen and (min-width: 700px){
        max-width: 500px;
        height: initial;
        font-size: 1rem;

        
    }
}
</style>