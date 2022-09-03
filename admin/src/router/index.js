import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '../views/Main.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
