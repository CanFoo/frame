import Vue from 'vue'
import Vuex from 'vuex'
import loadingMutations from './loading/mutations'
import counterMutations from './counter/mutations'
import counterAction from './counter/actions'

Vue.use(Vuex);

const loading = {
	state: {
		stack: []
	},
	mutations: loadingMutations
}
const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
const counter = {
	state: {
		count: 0
	},
	actions: counterAction,
	mutations: counterMutations,
	getters
}

export default new Vuex.Store({
	modules: {
		loading,
		counter
	}
})

