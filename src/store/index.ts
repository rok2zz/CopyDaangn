import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		mode: "light",
		searchQuery: ""
	},
	getters: {
		getMode(state) {
			return state.mode
		}
	},
	mutations: {
		setMode(state, value) {
			state.mode = value
		}
	},
})
