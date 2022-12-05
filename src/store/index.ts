import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mode: "light",
		products: {}
	},
	getters: {
		getMode(state) {
			return state.mode
		},
		getProducts(state) {
			return state.products
		}
	},
	mutations: {
		setMode(state, value) {
			state.mode = value
		},
		setProducts(state, value) {
			state.products = value
		}
	},
})
