import signUp from '../components/signUp.vue'
import logIn from '../components/logIn.vue'
import homePage from '../views/homePage.vue'
import auth from '../views/authPage.vue'
import mainContent from '../components/mainContent.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    children: [
      {
        path: '',
        component: mainContent
      },
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