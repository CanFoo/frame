import {TEST1_FLAG} from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function test1(state=4, action) {
  console.log("test111111");
  switch (action.type) {
    case TEST1_FLAG:
      return state + 1
    default:
      return state
  }
}