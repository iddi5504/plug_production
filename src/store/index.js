import Vue from 'vue'
import Vuex from 'vuex'
import {authStore} from './modules/authStore'
Vue.use(Vuex)

export default new Vuex.Store({
  namedspaced: true,
  state: {
    lightMode:false
  },
  getters: {
    LIGHTMODE(state){
      return state.lightMode
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authStore
  }
})
