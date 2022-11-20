<template>
    <div class="signup-body mh-10 mw-80 d-flex flex-column justify-content-around align-items-center w-100">
        <div class="legend h1">
            <div class="brand-name">Plug</div>
            <div>Discovered a really good song? Why not recommend it to others</div>
        </div>
        <div class="info ">
            <label for="username">Username</label>
            <div style="position:relative;">
                <input autocomplete="off" @keyup.enter="signUp" v-model.lazy="username" type="text" id="username">
            </div>
        </div>
        <div class="info ">
            <label for="username">Email</label>
            <div style="position:relative;">
                <input autocomplete="off" @keyup.enter="signUp" v-model.lazy="email" type="text" id="email">
            </div>
        </div>

        <div class="info ">
            <label for="password">Password</label>
            <div style="position:relative;">
                <input autocomplete="off" v-model.lazy="password" type="password" id="password">
            </div>
        </div>
        <!-- <div class="text-center note  ">
            Password must be more than six characters long in length
        </div> -->

        <button @click="signUp" class="authenticate-button">Sign Up</button>
        <!-- sign up with google -->
        <button @click="google" class="google">Sign up with Google</button>


        <h5 class="text-center p-2">
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
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { auth, firestore } from '../firebase/firebase'
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
            if (this.username && this.email && this.password) {
                this.$store.commit('showLoadScreen', 'Signing Up', { root: true })
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((user) => {
                        console.log(user)
                        const users = collection(firestore, 'users')
                        const this_user = doc(users, user.user.uid)
                        setDoc(this_user, {
                            email: this.email,
                            username: this.username,
                            upvotes: [],
                            downvotes: []
                        })
                            .then(() => {
                                this.$router.replace({ name: 'home' });
                            })
                        this.$store.commit('stopLoading', null, { root: true })

                    })

                    .catch((err) => {
                        this.$store.commit('stopLoading', null, { root: true })

                        if (err.message.includes('invalid') || err.message.includes('email')) {
                            this.$store.commit('showMinorAlertMessage', 'Invalid email', { root: true })
                        }
                        if (err.message.includes('password') || err.message.includes('least')) {
                            this.$store.commit('showMinorAlertMessage', 'Password should be at least six characters and must have special characters', { root: true })
                        }
                        if (err.message.includes('already')) {
                            this.$store.commit('showMinorAlertMessage', 'An account has already been created with this email', { root: true })
                        }
                        else {
                            this.$store.commit('showMinorAlertMessage', err.message, { root: true })
                        }
                    })
            }
            else {
                this.$store.commit('showMinorAlertMessage', 'Make sure you filled out all the fields', { root: true })
            }

        },
        google() {
            const googleAuth = new GoogleAuthProvider
            signInWithPopup(auth, googleAuth)
                .then(async (currentUser) => {
                    const users = collection(firestore, 'users')
                    const this_user = doc(users, currentUser.user.uid)
                    setDoc(this_user, {
                        email: currentUser.user.email,
                        username: currentUser.user.displayName
                    })
                        .then(() => {
                            this.$router.replace({ name: 'home' });
                        })
                })
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

    @media only screen and (min-width: 500px) {
        max-width: 500px;
        height: initial;
        font-size: 1rem;
        gap: 1px;
        border-radius: 10px;


    }

    font-size: 1.3rem;

    .note {
        max-width: 37ch;
    }

    .info {
        text-align: left;
        width: 100%;
        max-width: 358px;

        @media only screen and (min-width:500px) {
            max-width: 316px;
        }

        #password {
            background-image: url('../assets/password.svg');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;
        }

        #email {
            background-image: url('../assets/email.svg');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;

        }

        #username {
            background-image: url('../assets/user.png');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;
        }
    }

    label {
        font-size: 1.1rem;
        padding: 10px;

        @media only screen and (min-width:500px) {
            font-size: 1rem;
        }
    }

    .legend {
        font-size: 1rem;
        font-weight: 500;
        max-width: 44ch;
        padding: 12px;

        .brand-name {
            font-weight: 600;
            padding: 11px 10px;
            color: var(--brandcolor);
            font-size: 2rem;
            line-height: 28px;

            @media only screen and (min-width:500px) {
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
        box-shadow: var(--boxshadow);
        border-radius: 4px;
        font-size: 1rem;
        background: var(--brandcolor);
        font-weight: 700;
        color: black;
        margin: 3px;
        width: 100%;
        max-width: 316px;
        cursor: pointer;

        &:hover {
            background-color: var(--brandcolor);

        }
    }

    .google {
        color: black;
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
        cursor: pointer;

        &:hover {
            background-color: white;

        }
    }


}
</style>