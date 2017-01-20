import React, {Component} from 'react'
import { Button, Toast } from 'antd-mobile';

export default class Elapse extends Component {
  componentDidMount () {
    this.interval = setInterval(this.props.plus, 1000)
    // this.props.requestData(url).then((data) => {
    //   console.log(data)
    // })
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  loadingToast () {
    Toast.loading('加载中...', 2, () => {
       console.log('加载完成!!!');
     })
  }

  render () {
    const {elapse} = this.props
    return (
      <div>
        <h1>
          Seconds Elapsed: {elapse}
        </h1>
        <Button onClick={this.loadingToast} >加载中 toast</Button>
      </div>
    )
  }
}

Elapse.propTypes = {
  elapse: React.PropTypes.number.isRequired,
  plus: React.PropTypes.func.isRequired
}
