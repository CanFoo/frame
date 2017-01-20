import React, {Component} from 'react'
import './Zen.scss'
import Spinner from 'react-spinkit'
import { Button } from 'antd-mobile'

export default class Zen extends Component {

  render () {
    const { fetchZen, clearZen, zen: {fetching, text} } = this.props

    return (
      <div>
        <div className='loading'>
          { fetching ?
            <Spinner spinnerName='double-bounce' /> : ''
          }
        </div>
        <div>
          <Button className='btn btn-default' onClick={fetchZen}>
            {fetching ? 'Fetching...' : 'Fetch'}
          </Button>
          &nbsp;&nbsp;
          <Button className='btn btn-default' onClick={clearZen}>
            Clear
          </Button>
        </div>
        <div>
          {text.map(item => (
            <h1 key={item.id}>{item.text}</h1>
          ))}
        </div>
      </div>
    )
  }
}

Zen.propTypes = {
  zen: React.PropTypes.object.isRequired
}
