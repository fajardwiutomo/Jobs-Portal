import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CardDetail from '../components/CardDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/pub/jobs/:id',
    name: 'CardDetail',
    component: CardDetail
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.access_token
  if(!accessToken && to.name == 'Home'){
    next('/login')
  } else {
    next()
  }
  
  if(accessToken && (to.name == 'Login' || to.name == 'Register') ) {
    next('/')
  } else {
    next()
  }
})

export default router
