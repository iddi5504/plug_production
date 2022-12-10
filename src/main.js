import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { _ } from 'lodash'
export const bus = new Vue()
Vue.config.productionTip = false

// filters

Vue.filter('snippet', (text) => {
  const maxChar = 170
  if (text.length < maxChar) {
    return text
  } else {
    const snippet = text.slice(0, maxChar)
    return snippet.concat('.....')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
