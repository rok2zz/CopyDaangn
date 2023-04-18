import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import DaangnHome from '../views/DaangnHome.vue'
import Jobs from '../views/Jobs.vue'
import Realty from '../views/Realty.vue'
import HotArticles from '../views/HotArticles.vue'
import Articles from '../views/Articles.vue'
import Search from '../views/Search.vue'
import TopKeywords from '../views/TopKeywords.vue'

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
	},
	{
		path: '/articles',
		name: 'articles',
		component: Articles
	},
	{
		path: '/search',
		name: 'search',
		component: Search
	},
	{
		path: '/top_keywords',
		name: 'top_keywords',
		component: TopKeywords
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.NODE_ENV === 'production' ? '/daangn/' : '/',
	routes
})

export default router
