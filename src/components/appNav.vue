<template>
    <div>
        <!-- nav bar -->
        <div ref="navbar" id="navbar">
            <div v-if="isAuthenticated" style="flex: 1; padding: 0 0 0 8px">
                <div style="display: flex; justify-content: space-between">
                    <button style="background-color: transparent; border: 0px" @click="toggleModal">
                        <i class="fa fa-compass navicon"></i>
                    </button>

                    <div class="nav-bar-search all-search-bar">
                        <input autocomplete="off" ref="input" type="text" id="searchinput" placeholder="Search Recommendhub"
                            @click="search" />
                    </div>
                </div>
            </div>

            <div class="nav-center">
                <span style="display: flex; position: relative;">
                    <h5 id="brandname" ref="brandname" href="{% url 'home' %}">Plug</h5>
                    <!-- <img class="logo" src="../assets/pluglogo.png" alt=""> -->
                </span>
            </div>

            <!--largescreens-->
            <div v-if="isAuthenticated" id="navbariconslargescreens" style="flex: 1; ">

                <ul ref="icons" class="nav-bar-side-buttons">
                    <li class="nav-item">
                        <i class="bi bi-house navicon" id="homebutton"></i>
                    </li>
                    <li class="nav-item">
                        <i  @click="toggleMakePost" class="bi bi-plus-square navicon"></i>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="recommend-me">
                            <i class="bi bi-plus"></i>
                            <span>recommendMe</span>
                        </button>
                    </li>
                    <li class="nav-item" style="position: relative">
                        <i @click="shownotification_" class="bi bi-bell-fill navicon"></i>
                        <i class="number-of-notifications">41</i>
                    </li>

                    <li class="largescreendropdownbutton" @click="shownavoptions = !shownavoptions">
                        <img src="../assets/user (1).png" class="profile-pic" alt="">
                        <small id="username" class="user-name-snippet">{{ usernameSnippet }}</small>
                        <img src="../assets/down-arrow.png" alt="">
                    </li>
                </ul>
            </div>
            <!--smallscreenutitlities-->

            <div v-if="isAuthenticated" style="flex: 1" id="small-screen-nav-icons">
                <div class="container">
                    <button  @click="toggleMakePostBar" class="nav-buttons">
                        <i class="bi bi-plus-square navicon"></i>
                    </button>
                    <div class="notification-button">
                        <button @click="mobilenotification_" class="nav-buttons">
                            <i class="bi bi-bell navicon"></i>
                            <i class="numberofnotificationssmallscreen">12</i>
                        </button>
                    </div>

                    <button id="listdropdown" class="nav-buttons" @click="shownavoptions = !shownavoptions">
                        <i class="bi bi-list navicon"></i>
                    </button>
                </div>
            </div>

            <!-- authenticate -->
            <div v-if="!isAuthenticated" class="authenticate">
                <button class="auth-button" @click="$router.push({ name: 'logIn' })">Log In</button>
                <button class="auth-button" @click="$router.push({ name: 'signUp' })">Sign Up</button>
            </div>


            <!-- alert
            <div style="
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: center;
          ">
                <transition name="showalert">
                    <div v-show="recommendationalert" class="alert">
                        <i class="bi bi-check" style="
                  font-size: 1em;
                  border: 1px solid #10280e;
                  border-radius: 50%;
                  padding: 1px 3px;
                "></i>
                        <small>You have successfully made a recommendatioin</small>
                    </div>
                </transition>
            </div> -->
        </div>
        <!-- Hamburger menu -->
        <transition name="showoptions_">
            <div v-show="shownavoptions" ref="dropdown" class="dropdown" >
                <div class="dropdown-search all-search-bar">
                    <input autocomplete="off" @focus="hideDropdownList" @blur="showDropdownList" ref="input" type="text" id="searchinput" placeholder="Search Recommendhub"
                        @click="search" />
                </div>
               <transition name="showList">
                <ul v-show="dropdownListVisible" class="dropdownlist">
                    <li class="nav-item navitems">
                        <router-link style="flex-direction: column;" to="/profile">
                            <div style="display: flex; align-items: center; padding: 2px;">
                                <img src="../assets/user (1).png" alt="">
                                <small class="dropdowntext" style="padding-left: 5px">My Profile</small>
                            </div>
                            <div class="user-info-preview">
                                <small>{{ email }}</small>
                                <small>{{ username }}</small>
                            </div>
                        </router-link>
    
                    </li>
                    <li @click="togglelightmode" class="nav-item navitems">
                        <a type="button" class="nav-link">
                            <img src="../assets/light-bulb.png" alt="">
                            <small id="light" class="dropdowntext">light mode</small>
                        </a>
                    </li>
                    <li class="nav-item navitems">
                        <a href="ad.html" class="nav-link"><i class="bi bi-badge-ad"></i><small class="dropdowntext">Post an
                                Ad</small></a>
                    </li>
                    <li class="nav-item navitems">
                        <a class="nav-link"><i class="bi bi-info-circle"></i><small class="dropdowntext">About
                                Plug</small></a>
                    </li>
                    <li class="nav-item navitems">
                        <a class="nav-link"><i class="bi bi-info-circle"></i><small class="dropdowntext">FAQ</small></a>
                    </li>
                    <li class="nav-item navitems" @click="logout">
                        <a class="nav-link" style="color: red" tabindex="-1" aria-disabled="true">
                            <img src="../assets/shutdown.png" alt="">
                            <small class="dropdowntext">Logout</small>
                        </a>
                    </li>
                </ul>
               </transition>
            </div>
        </transition>

        <!-- make post bar -->
       <transition name="showoptions_">
        <div v-show="showMakePostBar" class="make-post-bar">
            <button @click="toggleMakePost">
                <i class="bi bi-pen"></i>
                 <span>Make post</span> 
            </button>
            <button>Ask for recommendation</button>
        </div>
       </transition>
    </div>
</template>
  
<script>
import { signOut } from '@firebase/auth';
import { auth } from '../firebase/firebase'
import { mapGetters, mapState } from 'vuex';
export default {
    data() {
        return {
            shownavoptions: false,
            showrecommendialogue: false,
            numberofnotifications: "",
            notifications: [],
            user_id: "016796169",
            recommendationalert: false,
            showsearch: false,
            lightModeImg: '',
            darkModeImg: '',
            lightIcon: '',
            dropdownListVisible:true,
        };
    },
    methods: {
        showrecommendialogue_: function () {
            this.showrecommendialogue = !this.showrecommendialogue;

            console.log(this.showrecommendialogue);
        },
        toggleModal() {
            this.$store.dispatch('modalStore/toggleModal', !this.$store.state.modalStore.showModal);
        },
        shownotification_: function () {
            this.shownotification = !this.shownotification;
        },

        search: function () {
            this.showsearch = !this.showsearch
        },

        togglelightmode() {
            this.$store.state.lightMode = !this.$store.state.lightMode
            console.log("🚀 ~ file: appNav.vue ~ line 192 ~ togglelightmode ~ this.$store.state.lightMode", this.$store.state.lightMode)
            if (this.$store.state.lightMode) {
                this.lightIcon = '../assets/light-bulb.png'
            } else {
                this.lightIcon = '../assets/lightbulb.png'
            }
        },

        logout() {
            signOut(auth)
                .then(() => {
                    this.$store.dispatch('authStore/cleanUp')
                    this.$router.push({ name: "signUp" })
                })
        },
        hideDropdownList(){
            this.dropdownListVisible=false
            const dropdown= document.getElementsByClassName('dropdown')[0]
            dropdown.style.maxHeight= '100%'
        },
        showDropdownList(){
            this.dropdownListVisible=true
            const dropdown= document.getElementsByClassName('dropdown')[0]
            dropdown.style.maxHeight= '345px'

        },

        mobilenotification_: function () {

        },
        toggleMakePost(){
            this.$store.state.makePostStore.showMakePost= !this.$store.state.makePostStore.showMakePost
            this.$store.state.makePostStore.showMakePostBar=false
        },
        toggleMakePostBar(){
            this.$store.state.makePostStore.showMakePostBar= !this.$store.state.makePostStore.showMakePostBar
        }


    },
    created() {
        console.log(this.isAuthenticated)
    },

    computed: {
        ...mapGetters('authStore', {
            username: 'USERNAME',
            email: 'EMAIL',
            usernameSnippet: 'USERNAMESNIPPET',
            isAuthenticated: 'ISAUTHENTICATED'
        }),
        ...mapState('makePostStore', ['showMakePostBar'])

    },

    watch: {
        recommendationalert() {
            setTimeout(() => {
                this.recommendationalert = false;
            }, 3000);
        },

    },
};
</script>

<style lang="scss" scoped>
#navbar {
    background: var(--primary);
    display: flex;
    height: 48px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 5;
    box-shadow: var(--boxshadow);

    .recommend-me {
        width: 100%;
        max-width: 97px;
        border-radius: 10px;
        color: #000000;
        background: #954fff;
        border: none;
        padding: 3px 1px;
        font-size: 10px;
        display: none;
        align-items: center;
        justify-content: center;
        

        @media only screen and (min-width: 700px) {
            padding: 3px 4px;
            display: flex;

        }

        &:hover {
            background: #954ccc;

        }

        .bi {
            font-size: 20px;
        }
    }

    img {
        width: 32px;
    }

    #small-screen-nav-icons {
        div {
            padding: 0px 5px;
            margin: 0px;
            display: flex;
            flex-direction: row;
            font-size: 28px;
            justify-content: end;
            gap: 7px
        }

        .nav-buttons {
            border: none;
            color: var(--textcolorimportant);
            background-color: transparent;
        }

        .notification-button {
            padding: 0px;
            position: relative;
            width: 37px;
            margin: 0px;
        }
    }

    #baroptionscontainer {
        display: flex;
        font-size: 26px;
        justify-content: end;
    }

    .nav-bar-side-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-decoration: none;
        list-style: none;
        gap: 35px;

        @media only screen and (max-width: 950px) {
                gap: 20px;
        }

    }

    .navicon {
        color: var(--textcolorimportant);
        font-size: 1.5rem;
    }



    #brandname {
        padding: 0px 15px;
        margin: 0;
        color: var(--brandcolor);
        font-size: 1.3rem;
    }

    .nav-center {
        display: flex;
        justify-content: center;
        padding: 0 10px 0 0px;
    }


    .authenticate {
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: end;
        gap: 17px;
        padding: 5px;

        @media only screen and (max-width: 600px) {
            gap: 5px;
        }

        .auth-button {
            padding: 6px;
            border: none;
            box-shadow: var(--boxshadow);
            border-radius: 4px;
            font-size: 0.8rem;
            background: var(--brandcolor);
            font-weight: 700;
            color: black;
            margin: 3px;
            width: 100%;
            max-width: 110px;
            cursor: pointer;

            @media only screen and (max-width: 600px) {
                font-size: 1rem;
            }

            &:first-child {
                background: transparent;
                color: var(--textcolorimportant);
                border: 1px solid white;

            }
            
            &:hover {
                background-color: var(--brandcolor);
                
            }
        }
    }
    
    
}

.make-post-bar{
    width: 100%;
    background: var(--secondary);
    color: var(--textcolorimportant);
    font-size: 1rem;
    position: absolute;
    top: 48px;
    left: 0px;
    display: flex;
    justify-content: space-around;
    height: 45px;

    button{
        border: none;
        background: var(--primary);
        color: var(--textcolorimportant);
        border-radius: 10px;
        padding: 7px;
        margin: 4px;
        font-size: 1rem;
        height: fit-content;

        i{
            padding: 3px;
        }
    }
}

.all-search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: min-content;
    margin: 10px 10px;
    width: 100%;
    @media only screen and (min-width: 600px) {
    }

    #searchicon {
        font-size: 20px;
        color: var(--textcolorimportant);
        position: absolute;
        top: 6px;
        left: 8px;
    }

    #searchinput {
        border: none;
        background: rgba(139, 130, 122, 0.1098039216);
        border-radius: 6px;
        color: var(--textcolornotimportant);
        padding: 5px 5px 5px 34px;
        font-variant-caps: all-small-caps;
        outline: none;
        font-size: 1rem;
        width: 100%;
        display: flex;
        background-image: url('../assets/loupe.png');
        background-repeat: no-repeat;
        background-size: 25px;
        background-position: 5px center;
        box-sizing: border-box;
        box-shadow: var(--boxshadow);
        @media only screen and (min-width: 600px) {
            max-width: 338px;
            
        }
    }
}

.nav-bar-search{
    display: none;
    @media only screen and (min-width: 570px) {
      display: initial;
    }
    
}
.dropdown-search{
    background: none !important;
    max-width: none;
    box-shadow: none !important;
    display: flex;
    max-width: 353px;
    input{
        box-sizing: border-box !important;
        max-width: none !important;
    }
    @media only screen and (min-width: 570px) {
      display: none;
    }
    
}

.dropdown {
    width: 100%;
    position: fixed;
    top: 47px;
    right: 0px;
    flex-direction: column;
    display: flex;
    margin: 0px;
    background-color: var(--primary);
    font-size: 26px;
    border-radius: 4px;
    z-index: 1;
    box-shadow: var(--boxshadow);
    height: 100%;
    max-height: 391px;
    align-items: center;
    @media only screen and (min-width: 570px) {
        max-width: 200px;
        padding: 6px;
        max-height: 288px;
    }
    justify-content: flex-start;

    
    .dropdownlist{
        height: 100%;
        max-height: 345px;
        flex-direction: column;
        display: flex;
        margin: 0px;
        justify-content: space-around;
        width: 100%;
        border: none;
        transition: 0.4s all ease;
        align-items: center;
    
    img {
        width: 32px;
    }

    >li {
        border-radius: 5px;
        background: var(--secondary);
        box-shadow: var(--boxshadow);
        flex-direction: column;
        cursor: pointer;
        max-width: 353px;
        width: 100%;

        .user-info-preview {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 3px;
            font-size: 1.1rem;
            color: var(--textcolornotimportant);
        }
    }
}

    
}


#navbariconslargescreens {
    display: none;

    .largescreendropdownbutton {
        display: flex;
        align-items: center;
        padding: 3px;
        border-radius: 4px;
        background: var(--secondary);
        margin: 4px;
        width: 100%;
        max-width: 162px;
        justify-content: space-between;
        gap: 4px;

        @media only screen and (max-width: 600px) {
            font-size: 1rem;
        }
        @media only screen and (max-width: 600px) {
            font-size: 1rem;
        }
        @media only screen and (max-width: 870px) {
            max-width: 69px;
            .user-name-snippet{
                display: none;
            }

            .nav-bar-side-buttons{
                gap: 20px;
            }
        }
      
        .profile-pic {
            width: 33px;
            height: 33px;
            border-radius: 50%;
        }
    }
}


.navitems a {
    display: flex;
    flex-direction: row;
    align-items: center;
}



#baroptionscontainer .nav-link {
    padding: 8px;
}

.navitems:hover {
    background-color: var(--secondary);
}

.dropdowntext:hover {
    color: var(--brandcolor) !important;

}

#baroptionscontainer .nav-link {
    padding: 8px;
}



#username {
    font-size: var(--detailsfs);
    color: var(--textcolorimportant);
    padding: 0px 2px;
}



.showoptions_-enter-to {
    transform: translateX(0px);
}

.showoptions_-enter-active,
.showoptions_-leave-active {
    transition: all 0.5s ease-in-out;
}

.showoptions_-leave-from {
    transform: translateX(0px);
}

.showoptions_-leave-to,
.showoptions_-enter {
    transform: translateY(-600px);
}

.showList-enter {
    opacity: 1;
}

.showList-enter-active,
.showList-leave-active {
    transition: all 0.5s ease-in-out;
}



.showList-leave-to,
.showList-enter {
    opacity: 0;
}



.dropdown ul {
    border: 1px black solid;
}

.dropdown i {
    color: var(--textcolorimportant);
}

.dropdowntext {
    font-size: var(--bodytextfs);
    color: var(--textcolorimportant);
    padding: 0px 10px;
}

.numberofnotificationssmallscreen {
    font-size: 12px;
    position: absolute;
    top: -2px;
    right: -2px;
    width: 25px;
    border-radius: 9px;
    background-color: var(--brandcolor);
    text-align: center;
    font-style: inherit;
}

.number-of-notifications {
    font-size: 0.6rem;
    position: absolute;
    top: 5px;
    right: -7px;
    border-radius: 9px;
    background-color: var(--brandcolor);
    text-align: center;
    font-style: inherit;
    color: var(--textcolorimportant);
    padding: 1px 5px;
}




.alert {
    position: absolute;
    background: lightgreen;
    top: 51px;
    border-left: 10px solid #00cd00;
}

.logo {
    width: 38px;
    height: auto;
    position: absolute;
    left: -41px;
    top: -10px;
}

.showalert-enter {
    transform: translateY(-100px);
}

.showalert-enter-to {
    transform: translateY(0px);
}

.showalert-enter-active {
    transition: all 0.5s ease;
}

.showalert-leave-from {
    transform: translateY(0px);
    opacity: 1;
}

.showalert-leave-to {
    transform: translateY(-400px);
    opacity: 0;
}

.showalert-leave-active {
    transition: all 0.5s ease;
}

@media only screen and (max-width: 600px) {
    #navbariconslargescreens {
        display: none !important;
    }

    #small-screen-nav-icons {
        display: block !important;
    }

    

    #searchicon {
        display: none;
    }
}

@media only screen and (min-width: 700px) {
    #navbariconslargescreens {
        display: block !important;
    }

    #small-screen-nav-icons {
        display: none !important;
    }
}
</style>