import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/Sort.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/watermark',
    name: 'Watermark',
    component: () => import('../views/Watermark.vue')
  },
  {
    path: '/style',
    name: 'Style',
    component: () => import('../views/Style.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
