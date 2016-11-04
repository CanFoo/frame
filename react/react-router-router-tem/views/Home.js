import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import Text from '../components/text.js'

function Home({ number, increase, decrease }) {
  return (
    <div>
      <Text text="Home Page"/>
      Some state changes:
      <span style={{color: 'red', fontSize: '30px', margin: '0 6px'}}>{number}</span>
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Home)
