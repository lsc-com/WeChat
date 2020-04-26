import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mail',
    name: 'Mail',
    component: () => import('../views/Mail.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find.vue')
  },
  {
    path: '/maildetails',
    name: 'Maildetails',
    component: () => import('../views/Maildetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
