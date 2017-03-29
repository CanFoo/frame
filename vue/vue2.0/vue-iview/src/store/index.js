import Vue from 'vue'
import Vuex from 'vuex'
// import loadingMutations from './loading/mutations'
import counterMutations from '../router/counter/containers/mutaction'
import counterAction from '../router/counter/containers/action'
import requestMutations from './request/mutaction'
import requestAction from './request/action'

Vue.use(Vuex)

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

const requestGetters = {
  isLoading: state => state.isLoading
}

const request = {
  state: {
    data: {},
    stack: [],
    isLoading: false
  },
  actions: requestAction,
  mutations: requestMutations,
  getters: requestGetters
}

export default new Vuex.Store({
  modules: {
    counter,
    request
  }
})
