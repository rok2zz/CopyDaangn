import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import DaangnHome from '../views/DaangnHome.vue'
import Jobs from '../views/Jobs.vue'
import Realty from '../views/Realty.vue'
import HotArticles from '../views/HotArticles.vue'

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
  },
  {
    path: '/hot_articles',
    name: 'hot_articles',
    component: HotArticles
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
