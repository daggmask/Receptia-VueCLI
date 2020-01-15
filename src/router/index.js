import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '@/views/Burgers.vue'
import Desserts from '@/views/Desserts.vue'
import Soups from '@/views/Soups.vue'
import Foods from '@/views/Foods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/burgers',
    name: 'burgers',
    component: Burgers
  },
  {
    path: '/desserts',
    name: 'desserts',
    component: Desserts
  },
  {
    path: '/soups',
    name: 'soups',
    component: Soups
  },
  {
    path: '/foods/:food',
    name: 'foods',
    component: Foods
  },
  {
    path: '/foods',
    name: 'foods',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
