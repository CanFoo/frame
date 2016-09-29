import { combineReducers } from 'redux'
import counter from './counter'
import test2 from './test1'
import string from './string'

//使用redux的combineReducers方法将所有reducer打包起来
//根据action的动作状态来进行匹配，从而执行相应的动作
//通过为传入对象的reducer命名(由上面导出的名称)不同来控制 state key 的命名，详见http://cn.redux.js.org/docs/api/combineReducers.html
const rootReducer = combineReducers({
  counter,
  test2,
  string
})

export default rootReducer
