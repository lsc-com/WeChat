import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

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
    component: () => import('../views/Home.vue')
  },
  {
    path: '/mail list',
    name: 'Mail list',
    component: () => import('../views/Mail list.vue')
  },
  {
    path: '/find',
    name: 'Find',
    component: () => import('../views/Find.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
