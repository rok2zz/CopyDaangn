import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import DaangnHome from '../views/DaangnHome.vue'
import Jobs from '../views/Jobs.vue'
import Realty from '../views/Realty.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Daangnhome',
    component: DaangnHome
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/realty',
    name: 'realty',
    component: Realty
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
