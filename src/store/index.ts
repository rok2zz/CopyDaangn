import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mode: "light",
		searchQuery: "",
		articleID: "496143739",
		products: {}
	},
	getters: {
		getMode(state) {
			return state.mode
		},
		getSearchQuery(state) {
			return state.searchQuery
		},
		getArticleID(state) {
			return state.articleID
		},
		getProducts(state) {
			return state.products
		}
	},
	mutations: {
		setMode(state, value) {
			state.mode = value
		},
		setSearchQuery(state, value) {
			state.searchQuery = value
		},
		setArticleID(state, value) {
			state.articleID = value
		},
		setProducts(state, value) {
			state.products = value
		}
	},
})
