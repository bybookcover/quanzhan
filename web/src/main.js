import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
import Card from './components/Card.vue'
Vue.component('m-card',Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-card-list',ListCard)

// import style
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
