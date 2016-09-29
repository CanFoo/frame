import { INCREMENT_COUNTER, DECREMENT_COUNTER, TEST1_FLAG} from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
//根据action的动作状态来进行匹配，从而执行相应的动作，
export default function counter(state=1, action) {
  console.log("counterrrrrrr");
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    case TEST1_FLAG:
      return state + 1
    default:
      return state
  }
}
