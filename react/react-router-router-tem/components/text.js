import React, { Component, PropTypes } from 'react'
import '../style/components/text.css'

class Text extends Component {
  render() {
    return (
      <div>
        <span className='text'>{this.props.text}</span>
      </div>
    )
  }
}
//限制组件的props安全
Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text
