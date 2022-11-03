<template>
    <div class="signup-body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="legend h1">
            <div class="brand-name">Plug</div>
            <div>Discovered a really good song? Why not recommend it to others</div>
        </div>
        <div class="info ">
            <label for="username">Username</label>
            <div style="position:relative;">
                <input @keyup.enter="signUp" v-model.lazy="username" type="text" id="username">
            </div>
        </div>
        <div class="info ">
            <label for="username">Email</label>
            <div style="position:relative;">
                <input @keyup.enter="signUp" v-model.lazy="email" type="text" id="email">
            </div>
        </div>

        <div class="info ">
            <label for="password">Password</label>
            <div style="position:relative;">
                <input v-model.lazy="password" type="password" id="password">
            </div>
        </div>
        <!-- <div class="text-center note  ">
            Password must be more than six characters long in length
        </div> -->

        <button @click="signUp" class="authenticate-button" >Sign Up</button>
        <!-- sign up with google -->
        <button @click="signUp" class="google">Sign up with Google</button>
        

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
                        this.$router.replace({name:'home'});
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
    color: var(--textcolorimportant);
    border-radius: none;
    padding: 13px 5px;
    @media only screen and (min-width: 500px){
        max-width: 500px;
        height: initial;
        font-size: 1rem;
        gap: 1px;
        border-radius: 10px;

        
    }
    font-size: 1.3rem;
    .note{
        max-width: 37ch;
    }
    .info{
        text-align: left;
        width: 100%;
        max-width: 358px;
        @media only screen and (min-width:500px){
            max-width: 316px;
        }
        #password{
             background-image: url('../assets/padlock.png');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;
        }
        #email{
             background-image: url('../assets/mail.png');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;
            
        }
        #username{
             background-image: url('../assets/user.png');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;
        }
    }
    label{
        font-size: 1.1rem;
        padding: 10px;
        @media only screen and (min-width:500px){
            font-size: 1rem;
        }
    }
    .legend{
        font-size: 1rem;
        font-weight: 500;
        max-width: 44ch;
        padding: 12px;
        .brand-name{
        font-weight: 600;
        padding: 11px 10px;
        color: var(--brandcolor);
        font-size: 2rem;
        line-height: 28px;
        @media only screen and (min-width:500px){
            font-size: 1.7em;
        }
        }
        
    }
    input {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 4px 10px 41px;
        margin: 5px;
        border: none;
        font-size: 23px;
        border-radius: 5px;
        box-shadow: var(--boxshadow);
        color: #bcc2c5;
        background: var(--secondary);
        outline: none;
        transition: all 0.5s ease;
        font-size: 1rem;

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

    .authenticate-button {
        padding: 6px;
        border: none;
        box-shadow: 0px 0px 4px black;
        border-radius: 4px;
        font-size: 1rem;
        background: var(--brandcolor);
        font-weight: 700;
        color: black;
        margin: 3px;
        width: 100%;
        max-width: 316px;
        cursor:pointer;
        &:hover{
        background-color: var(--brandcolor);

        }
    }
    
    .google{
        color:black;
        font-size: 1rem;
        margin: 7px;
        width: 100%;
        max-width: 316px;
        background-image: url('../assets/google.png');
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: 5px center;
        border-radius: 13px;
        padding: 10px;
        background-color: ghostwhite;
        cursor:pointer;
        &:hover{
        background-color: white;

        }
    }


}
</style>