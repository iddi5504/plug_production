import signUp from '../components/signUp.vue'
import logIn from '../components/logIn.vue'
import homePage from '../views/homePage.vue'
import auth from '../views/authPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    children: [
      // {
      //   path: '',
      //   name: 'home',
      //   component: signUp
      // },
    ]
  },
  {
    path: '/auth',
    component: auth,
    children: [
      {
        path: '',
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