import React from 'react'
import { Link, browserHistory } from 'react-router'
import '../style/views/App.css'

export default function App({ children }) {
  return (
    <div className="app">
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}
