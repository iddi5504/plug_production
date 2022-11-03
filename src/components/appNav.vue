<template>
    <div>
        <!-- nav bar -->
        <div ref="navbar" id="navbar">
            <div style="flex: 1; padding: 0 0 0 8px">
                <div style="display: flex; justify-content: space-between">
                    <button style="background-color: transparent; border: 0px" @click="showmodal_">
                        <a style=" font-size: 26px" type="button"><i class="fa fa-compass navicon"></i></a>
                    </button>

                    <div id="searchbar">
                        <input ref="input" type="text" id="searchinput" placeholder="Search Recommendhub"
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
            <div id="navbariconslargescreens" style="flex: 1; ">
                <div style="padding: 0px; margin: 0px" class="container">
                    <ul ref="icons" id="baroptionscontainer" class="nav justify-content-end">
                        <div id="baroptioincontent">
                            <li class="nav-item">
                                <router-link to="/feed">
                                    <a type="button" id="homebutton" class="nav-link">
                                        <i class="bi bi-house navicon"></i>
                                    </a>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <a type="button" @click="showrecommendialogue_" class="nav-link">

                                    <i class="bi bi-plus-square navicon"></i>
                                </a>
                            </li>
                            <li class="nav-item" style="position: relative">
                                <a type="button" @click="shownotification_" class="nav-link">
                                    <i class="bi bi-bell-fill navicon"></i>
                                    <i class="numberofnotificationslargescreen">{{
                                            numberofnotifications
                                    }}</i>
                                </a>
                            </li>

                            <li id="largescreendropdownbutton" class="nav-item">
                                <div class="nav-link d-flex flex-direction-row align-items-center" type="button"
                                    @click="shownavoptions = !shownavoptions">
                                    <a><i class="fa-solid fa-user" style="color:white;"></i></a>

                                    <small id="username">iddi</small>
                                </div>
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
            <!--smallscreenutitlities-->

            <div style="flex: 1" id="small-screen-nav-icons">
                <div class="container">
                    <button style="background-color: inherit; border: 0px" @click="showrecommendialogue_">
                        <i class="bi bi-plus-square navicon"></i>
                    </button>
                    <div style="padding: 0px; position: relative; padding: 0px; position: relative; width: 37px; margin: 0px;" class="container">
                        <router-link to="/notification">
                            <button @click="mobilenotification_" style="background-color: inherit; border: 0px">
                                <i class="bi bi-bell navicon"></i>
                                <i class="numberofnotificationssmallscreen">{{
                                        numberofnotifications
                                }}</i>
                            </button>
                        </router-link>
                    </div>

                    <button id="listdropdown" style="background-color: inherit; border: 0px"
                        @click="shownavoptions = !shownavoptions">
                        <i class="bi bi-list navicon"></i>
                    </button>
                </div>
            </div>
            <!--options-->
            <transition name="showoptions_">
                <ul v-show="shownavoptions" id="dropdownlist" class="nav justify-content-end">
                    <li class="nav-item navitems">
                        <router-link style="flex-direction: column;"  to="/profile">
                            <div style="display: flex; align-items: center; padding: 2px;">
                                <img src="../assets/user (1).png" alt="">
                                <small class="dropdowntext" style="padding-left: 5px">My Profile</small>
                            </div>
                            <div class="user-info-preview">
                                <small>{{email}}</small>
                                <small>{{username}}</small>
                            </div>
                        </router-link>

                    </li>
                    <li @click="togglelightmode" class="nav-item navitems">
                        <a type="button" class="nav-link">
                            <img :src="lightIcon" alt="">
                            <small id="light" class="dropdowntext">light mode</small>
                        </a>
                    </li>
                    <li class="nav-item navitems">
                        <a href="ad.html" class="nav-link"><i class="bi bi-badge-ad"></i><small
                                class="dropdowntext">Post an Ad</small></a>
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
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            shownavoptions: true,
            showrecommendialogue: false,
            showmodal: false,
            numberofnotifications: "",
            notifications: [],
            user_id: "016796169",
            recommendationalert: false,
            showsearch: false,
            lightModeImg: '',
            darkModeImg:'',
            lightIcon:''

        };
    },
    methods: {
        showrecommendialogue_: function () {
            this.showrecommendialogue = !this.showrecommendialogue;
           
            console.log(this.showrecommendialogue);
        },
        showmodal_: function () {
            this.showmodal = !this.showmodal;
            console.log(this.showmodal);
        },
        shownotification_: function () {
            this.shownotification = !this.shownotification;
        },

        search: function () {
            this.showsearch = !this.showsearch
        },

        togglelightmode() {
            this.$store.state.lightMode = !this.$store.state.lightMode
            if(this.$store.state.lightMode){
                this.lightIcon='../assets/light-bulb.png'
            }else{
                this.lightIcon='../assets/lightbulb.png'
            }
        },

        logout: function () {
            this.$router.push({ name: "signup" })
        },
        test: function () {

        },

        mobilenotification_: function () {

        }


    },
    created() {
       
    },

    computed: {
        ...mapGetters('authStore',{
            username:'USERNAME',
            email:'EMAIL'
        })
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
    z-index: 1;
    box-shadow: var(--boxshadow);
    img{
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
    }

    #baroptionscontainer {
        display: flex;
        font-size: 26px;
        justify-content: end;
    }

    #baroptioincontent {
        display: flex;
        justify-content: space-around;
        width: 300px;
        align-items: center;
        text-decoration: none;
        list-style: none;
    }

    .navicon {
        color: var(--textcolorimportant);
        font-size: 1.5rem;
    }


    #searchbar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: min-content;
        margin: 5px 10px;
        width: 100%;

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
            font-size: larger;
            width: 100%;
            max-width: 276px;
            background-image:url('../assets/loupe.png');
            background-repeat: no-repeat;
            background-size: 25px;
            background-position: 5px center;
        }
    }

    #brandname {
        padding: 0px 3px;
        margin: 0;
        color: var(--brandcolor);
        font-size: 1.3rem;
    }

    .nav-center {
        display: flex;
        justify-content: center;
        padding: 0 10px 0 0px;
    }

    #dropdownlist {
        width: 100%;
        max-width: 200px;
        position: fixed;
        top: 47px;
        right: -1px;
        flex-direction: column;
        display: flex;
        margin: 0px;
        background-color: var(--primary);
        font-size: 26px;
        border-radius: 4px;
        z-index: 1;
        box-shadow: var(--boxshadow);
        height: 100%;
        max-height: 288px;
        justify-content: space-around;
        padding: 6px;

        >li {
            border-radius: 5px;
            background: var(--secondary);
            box-shadow: var(--boxshadow);
            flex-direction: column;
            cursor:pointer;
            .user-info-preview{
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
}


.navitems a {
    display: flex;
    flex-direction: row;
    align-items: center;
}



#baroptionscontainer .nav-link {
    padding: 8px;
}

.navitems {}

.navitems .nav-link {}

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

.showoptions_-enter {
    transform: translateX(400px);
}

.showoptions_-enter-to {
    transform: translateX(0px);
}

.showoptions_-enter-active {
    transition: all 1s ease;
}

.showoptions_-leave-from {
    transform: translateX(0px);
}

.showoptions_-leave-to {
    transform: translateX(400px);
}

.showoptions_-leave-active {
    transition: all 1s ease;
}

#dropdownlist ul {
    border: 1px black solid;
}

#dropdownlist i {
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

.numberofnotificationslargescreen {
    font-size: 12px;
    position: absolute;
    top: 9px;
    right: -2px;
    width: 25px;
    border-radius: 9px;
    background-color: var(--brandcolor);
    text-align: center;
    font-style: inherit;
    color: var(--textcolorimportant);
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

    #searchinput {
        display: none;
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