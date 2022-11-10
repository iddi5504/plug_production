import Vue from 'vue'
import Vuex from 'vuex'
import {authStore} from './modules/authStore'
import {modalStore} from './modules/modalStore'
import {makePostStore} from './modules/makePostStore'
Vue.use(Vuex)

export default new Vuex.Store({
  namedspaced: true,
  state: {
    lightMode:false,
    alertMessage:'',
    showAlertMessage:false,
    smallMessage:''
  },
  getters: {
    LIGHTMODE(state){
      return state.lightMode
    }
  },
  mutations: {
    alert(state, message){
      state.alertMessage= message[0]
      state.smallMessage= message[1]
      state.showAlertMessage=true;
      setTimeout(() => {
        state.showAlertMessage=false;
      }, 121000);
  }
  },
  actions: {
  },
  modules: {
    authStore,
    modalStore,
    makePostStore
  }
})
