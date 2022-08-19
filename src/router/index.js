import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import FormData from "../components/FormData.vue"
import UserData from "../components/UserData.vue"
import Login from "../components/Login.vue"
import Update from "../components/Update.vue"
import Pagination from "../components/pagination.vue"
import SortBy from "../components/sortBy.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'FormData',
    component: FormData
  },
  {
    path: '/userdata',
    name: 'UserData',
    component: UserData
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    // path: '/update',
    path: '/update/:id',
    name: 'Update',
    component: Update
  },
  {
    // path: '/update',
    path: '/pagination',
    name: 'Pagination',
    component: Pagination
  },
  {
    // path: '/update',
    path: '/sort',
    name: 'SortBy',
    component: SortBy
  }
  
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
