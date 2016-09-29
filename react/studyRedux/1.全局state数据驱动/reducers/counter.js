import { INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counter'

let numRecord = {
  value: 1,
  allData: [1]
}

//第一个参数为对应的全局state的变量，第二个变量由action方法中return传递出来的
export default function counter(state=numRecord, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        value: ++state.value,
        allData: [...state.allData, state.value]
      }
    case DECREMENT_COUNTER:
      state.allData.length--
      return {
        value: --state.value,
        allData: [...state.allData]
      }
    default:
      return state
  }
}

/*如果return是一个引用地址，需要定于重新定义一个新的变量，否则会有问题
export default function counter(state=numRecord, action) {
  //state最终毁与numRecord的引用地址是一致的，所以下面语句执行毁有问题
  console.log(state === numRecord)
  switch (action.type) {
    case INCREMENT_COUNTER:
      numRecord.value = ++state.value
      numRecord.allData.push(state.value)
      console.log(numRecord)
      return numRecord
    case DECREMENT_COUNTER:
      return 1
    default:
      return state
  }
}
*/