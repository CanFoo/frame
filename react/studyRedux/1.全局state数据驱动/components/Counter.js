import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment,decrement, numRecord} = this.props;
    //渲染组件，包括一个数字，四个按钮
    return (
      <div>
        Clicked: {numRecord.value} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {
          numRecord.allData.map(item => {
            return <h1>{item}</h1>
          })
        }
      </div>
    )
  }
}
//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  numRecord: PropTypes.object.isRequired,
};

export default Counter
