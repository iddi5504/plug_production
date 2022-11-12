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
    smallMessage:'',
    showLoadScreen:false,
    loadScreenMessage:'',
    minorAlertMessage:'',
    showMinorAlertMessage:false,
    section:'Surf'
  },
  getters: {
    LIGHTMODE(state){
      return state.lightMode
    },
    SELECTEDSECTION(state){
      if(state.section === 'Surf'){
        return "Surf Plug"
      }
      if(state.section === 'irecommend'){
        return "Make recommendations"
      }
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
  },
  showLoadScreen(state, message){
    state.loadScreenMessage=message;
    state.showLoadScreen=true;
  },
  stopLoading(state){
    state.showLoadScreen=false
  },
  showMinorAlertMessage(state, message){
    state.showMinorAlertMessage= true;
    state.minorAlertMessage= message;
    setTimeout(() => {
      state.showMinorAlertMessage= false;
    }, 4000);
  },
  setSection(state, section){
    state.section= section;
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
