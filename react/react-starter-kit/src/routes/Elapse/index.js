import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'elapse',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Elapse = require('./containers/ElapseContainer').default
      const reducer = require('./modules/elapse').default
      const requestReducer =  require('../../store/request').default

      injectReducer(store, { key: 'elapse', reducer })
      injectReducer(store, { key: 'request', reducer: requestReducer })
      cb(null, Elapse)
    })
  }
})

