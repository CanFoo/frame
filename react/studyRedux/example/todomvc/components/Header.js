import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todo</h1>
          <TodoTextInput newTodo //如果有定义属性赋值的话，获取到属性的结果为true
                         onSave={this.handleSave.bind(this)} //ES6写法，绑定函数需要改变函数内的this指针
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
