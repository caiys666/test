import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
import Layout from '@/views/Layout/index.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    hidden: true,
    component: Login
  },
  {
    path: '/page',
    name: 'Page', 
    redirect: "index",
    meta:{
      name:'控制台',
      icon: 'console'
    },
    component: Layout,
    children:[
      {
      path: '/index',
      name: 'Index',
      meta:{
        name:'首页',
      },
      component: () => import("../views/page/Page.vue"),
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    meta:{
      name:'信息管理',
      icon: 'menu'
    },
    component: Layout,
    children:[
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta:{
          name:'信息列表'
        },
        component: () => import("../views/page/index.vue"),
      },
      {
        path: "/infocategory",
        name: "InfoCategory",
        meta:{
          name:'信息分类'
        },
        component: () => import("../views/page/category.vue"),
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta:{
      name:'用户管理',
      icon: 'user'
    },
    component: Layout,
    children:[
      {
        path: "/userIndex",
        name: "UserIndex",
        meta:{
          name:'用户列表'
        },
        component: () => import("../views/User/index.vue"),
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
