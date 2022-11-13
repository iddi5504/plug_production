import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
import store from '../store/index'

const router = new VueRouter({
  store:store,
  routes,
  mode:"history"
})

export default router
