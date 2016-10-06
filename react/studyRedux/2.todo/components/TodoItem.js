import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import './TodoItem.css'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(id, text) {
    this.props.editTodo(id, text);
    this.setState({editing: false});
  }

  test(text) {

  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      //这里属性onSave的写法与Header.js写法保持一致，都是只传入一个text参数
      element = (
        <TodoTextInput  text={todo.text}
                        todoItem
                        key={todo.id}
                        onSave={(text) => this.handleSave(todo.id, text)}
                        />
      )
    } else {
      element = (
        <div className="text" onDoubleClick={this.handleDoubleClick.bind(this)}>
          <p>{todo.text}</p>
        </div>
      )
    }

    return (
      <li>
        {element}
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
