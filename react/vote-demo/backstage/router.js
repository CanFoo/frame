import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'
import { App, Home, Users, Rank, UserInfo, AddUser} from './views'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)
const history = syncHistoryWithStore(hashHistory, store)

//IndexRoute指定子路由默认显示的视图
//onLeave和onEnter为路由钩子的属性
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="users" component={Users} onLeave={() => {console.log('users leave')}} 
                                                onEnter={() => {console.log('users enter')}} />
          <Route path="rank" component={Rank} /> 
          <Route path="/user/:userID" component={UserInfo} />
          <Route path="/add" component={AddUser}/>
        </Route>
      </Router>
      {/*<DevTools />*/}
    </div>
  </Provider>,
  document.getElementById('app')
)
