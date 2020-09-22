import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
import Layout from '@/views/Layout/index.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/page',
    name: 'Page', 
    redirect: "index",
    component: Layout,
    children:[
      {
      path: '/index',
      name: 'Index',
      comments: () => import("../views/page/Page.vue"),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
