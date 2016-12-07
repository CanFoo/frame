import * as TYPES from './mutation-types'

export default {
  [TYPES.INCREMENT] (state) {
    state.count++
  },
  [TYPES.DECREMENT] (state) {
    state.count--
  }
};
