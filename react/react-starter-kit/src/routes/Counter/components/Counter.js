import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }}>
    <h2>Counter: {props.counter1}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
     <h2>elapse: {props.elapse1}</h2>
    <button className='btn btn-default' onClick={props.plus}>
      Plus
    </button>
  </div>
)

Counter.propTypes = {
  counter1: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
