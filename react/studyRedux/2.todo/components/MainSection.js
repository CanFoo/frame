import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import TodoTextInput from './TodoTextInput'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import './MainSection.css'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {todos, actions} = this.props;
    return (
      <section className="main">
        <ul>
          {
            todos.map((todo) => {
              return  <TodoItem key={todo.id}
                                todo={todo}
                                {...actions} />
            })
          }
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
