import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import * as reducers from '../reducers'

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

export const store = createStoreWithMiddleware(reducer, DevTools.instrument())
export const dispatch = store.dispatch
export const history = syncHistoryWithStore(hashHistory, store)

