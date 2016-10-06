import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import './TodoTextInput.css'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    if(e.keyCode === 13) {
      this.props.onSave(e.target.value)
      if(this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleBlur(e) {
    if(e.target.value) {
      this.props.onSave(e.target.value)
      if(this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }

  render() {
    return (
      <div className={classnames({
        'text': true,
        'new_todo': this.props.newTodo
      })}>
        <input className={classnames({
          'input': true,
          'todo_item': this.props.todoItem
          })}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.text}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
