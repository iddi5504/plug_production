import signUp from '../components/signUp.vue'
import logIn from '../components/logIn.vue'
import homePage from '../views/homePage.vue'
import auth from '../views/authPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: homePage
  },
  {
    path: '/',
    name: 'auth',
    component: auth,
    children: [
      {
        path: '/',
        name: 'signUp',
        component: signUp
      },
      {
        path: '/login',
        name: 'logIn',
        component: logIn
      }

    ]
  }

]
export default routes