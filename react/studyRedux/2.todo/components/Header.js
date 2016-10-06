import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import './Header.css'

class Header extends Component {
  handleSave(text) {
    if(text != '') {
      this.props.addTodo(text);
    }
  }

  render() {
    // return (
    //   <header className="header">
    //       <h1>todo</h1>
    //       <TodoTextInput
    //         newTodo
    //         onSave={this.handleSave.bind(this)}
    //       />
    //   </header>
    // )

    //onSave的第二种写法
    return (
      <header className="header">
          <h1>todo</h1>
          <TodoTextInput
            newTodo
            placeholder='What needs to be done?'
            onSave={(text) => this.handleSave(text)}
          />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
