import { INCREMENT_COUNTER, DECREMENT_COUNTER, TEST1_FLAG} from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
//根据action的动作状态来进行匹配，从而执行相应的动作
export default function test1(state="hello", action) {
  console.log("stringgggggg");
  switch (action.type) {
    case TEST1_FLAG:
      return "TEST1_FLAG"
    case INCREMENT_COUNTER:
      return "INCREMENT_COUNTER"
    case DECREMENT_COUNTER:
      return "DECREMENT_COUNTER"
    default:
      return state
  }
}