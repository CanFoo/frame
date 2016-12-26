import * as TYPES from './types'

export default {
  increment: ({ commit }) => commit(TYPES.INCREMENT),
  decrement: ({ commit }) => commit(TYPES.DECREMENT),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit(TYPES.INCREMENT)
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(TYPES.INCREMENT)
        resolve()
      }, 1000)
    })
  }
};
