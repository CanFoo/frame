import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  /*  如果路由匹配/couter，则异步调用getComponent这个函数   */
  getComponent (nextState, cb) {

    console.log('nextState', nextState.location)
    /*  webpakc按需加载的核心方法，第一个参数是依赖，第二个参数
        是回调方法，第三个参数生成的js的名字一部分，对应webpack
        的输出配置chunkFilename里的[name]   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
          
      const Counter = require('./containers/CounterContainer').default
      const reducer1 = require('./modules/counter').default

      /*  全局变量添加了‘counter’这个名称的变量  */
      injectReducer(store, { key: 'counter1', reducer: reducer1 })
  
      const reducer2 = require('../Elapse/modules/elapse').default
      injectReducer(store, { key: 'elapse1', reducer:  reducer2})

      /*  返回  getComponent  */
      cb(null, Counter)

    /* 对应上文说的[name]   */
    }, 'counter')
  }
})
