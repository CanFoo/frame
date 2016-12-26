import * as TYPES from './types'

export default {
  [TYPES.INCREMENT] (state) {
    state.count++
  },
  [TYPES.DECREMENT] (state) {
    state.count--
  }
};
