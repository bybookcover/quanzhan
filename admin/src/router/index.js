import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'


import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {
        path:'/categories/create',
        component: CategoryEdit
      },
      {
        path:'/categories/list',
        component: CategoryList
      }, 
      {
        path:'/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },

      {
        path:'/items/create',
        component: ItemEdit
      },
      {
        path:'/items/list',
        component: ItemList
      }, 
      {
        path:'/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      
      {
        path:'/heros/create',
        component: HeroEdit
      },
      {
        path:'/heros/list',
        component: HeroList
      }, 
      {
        path:'/heros/edit/:id',
        component: HeroEdit,
        props: true
      },
      {
        path:'/articles/create',
        component: ArticleEdit
      },
      {
        path:'/articles/list',
        component: ArticleList
      }, 
      {
        path:'/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },

      {
        path:'/ads/create',
        component: AdEdit
      },
      {
        path:'/ads/list',
        component: AdList
      }, 
      {
        path:'/ads/edit/:id',
        component: AdEdit,
        props: true
      },
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
