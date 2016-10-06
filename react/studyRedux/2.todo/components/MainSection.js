import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import TodoTextInput from './TodoTextInput'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import './MainSection.css'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  test(text) {

  }

  handleClearCompleted() {

  }

  handleShow() {

  }

  renderToggleAll(completedCount) {
  }

  renderFooter(completedCount) {
  }

  render() {

    return (
      <section className="main">
        <ul>
          {
            this.props.todos.map((todo) => {
              return  <TodoItem key={todo.id}
                                todo={todo}
                                editTodo={this.props.editTodo} />
            })
          }
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  // todos: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired
}

export default MainSection
