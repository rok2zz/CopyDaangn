import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mode: "light",
		sales: {}
	},
	getters: {
		getMode(state) {
			return state.mode
		},
		getSales(state) {
			return state.sales
		}
	},
	mutations: {
		setMode(state, value) {
			state.mode = value
		},
		setSales(state, value) {
			state.sales = value
		}
	},
})
