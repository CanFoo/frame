import React, {Component} from 'react'

export default class Elapse extends Component {

  componentDidMount () {
    this.interval = setInterval(this.props.plus, 1000)

    // fetch('url').then((response) => {
    //   return response.json()
    // }).then((json) => {
    //   console.log(json)
    // }) 
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const {elapse} = this.props
    return (
      <h1>
        Seconds Elapsed: {elapse}
      </h1>
    )
  }
}

Elapse.propTypes = {
  elapse: React.PropTypes.number.isRequired,
  plus: React.PropTypes.func.isRequired
}
