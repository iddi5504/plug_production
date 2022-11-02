import signUp from '../views/signUp.vue'
import logIn from '../views/logIn.vue'
import homePage from '../views/homePage.vue'

const routes = [
    {
      path: '/',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/logIn',
      name: 'logIn',
      component:logIn
    },
    {
      path: '/home',
      name: 'home',
      component:homePage
    }
  ]
export default routes