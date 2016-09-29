import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter, test1, test1Click, string} = this.props;
    //渲染组件，包括一个数字，四个按钮
    return (
      <div>
        <p>{string}</p>
        <p>
          test1: {test1} times
          {' '}
          <button onClick={test1Click}>t1</button>
        </p>
        
       
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </div>
    )
  }
}
//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  test1Click: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.number.isRequired,
  test1: PropTypes.number.isRequired
};

export default Counter
