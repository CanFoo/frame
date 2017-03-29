import * as TYPES from './type'

export default {
  [TYPES.INCREMENT] (state) {
    state.count++
  },
  [TYPES.DECREMENT] (state) {
    state.count--
  }
}
