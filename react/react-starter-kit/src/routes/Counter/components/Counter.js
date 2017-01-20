import React from 'react'
import { Button } from 'antd-mobile'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }}>
    <h2>Counter: {props.counter1}</h2>
    <Button className='btn btn-default' size="small" onClick={props.increment}>
      Increment
    </Button>
    {' '}
    <Button className='btn btn-default' size="small" onClick={props.doubleAsync}>
       Double (Async)
    </Button>
    <h2>elapse: {props.elapse1}</h2>
    <Button className='btn btn-default' size="small" onClick={props.plus}>
        Plus
    </Button>
  </div>
)

Counter.propTypes = {
  counter1: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
