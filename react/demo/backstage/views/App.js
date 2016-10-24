import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { getUsersData } from '../actions/users'
import classnames from 'classnames'
import '../lib/style.css'
import './App.css'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      expand: [0, 0]
    }
  }

  componentDidMount() {
    let url = '/vote/index/data';
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.errno === 0) {
        this.props.getUsersData(json.data.objects);
      }
      console.log(json)
    }).catch((er) => {
      console.log('parsing failed', er)
    })
  }

  componentWillReceiveProps(nextProps) {
    //通过更改全局expand值（已经绑定在该组件的props上）更新进而异步回调
    if (nextProps.expand === true) {
      this.expandDispaly()
    }
  }

  expandDispaly() {
    this.setState({
      expand: [1, 1]
    })
  }

  navExpand(event) {
    let item = +event.target.getAttribute('data-navid'),
        newExpand = this.state.expand;
    newExpand[item] = !newExpand[item];
    this.setState({
      expand: newExpand
    })
  }

  render() {
    return (
      <div>
        <div className="top2">
          <div className="title" >
            <h3><Link to="/" style={{fontSize: '46px', color: '#fff'}}>投票后台管理界面</Link></h3>
          </div>
          <div className="fr top-link">
            <a href="javascript:void(0);">
              <i className="adminIcon"></i>
              <span>管理员：admin</span>
            </a> 
          </div>
        </div>
        <div>
          <div className="left">
            <div className="div1">
              <div className="div2" data-navid="0" onClick={this.navExpand.bind(this)}>
                <div className="spgl" data-navid="0"></div>
                <span data-navid="0">用户管理</span>
              </div>
              <div className={classnames({
                  'div3': true
                })} style={{height: this.state.expand[0] ? "62px" : "0px"}}>
                <li>
                  <Link to="/users">查看所有用户</Link>
                </li>
                <li>
                  <Link to="/add">添加用户成员</Link>
                </li>
              </div>
              <div className="div2" data-navid="1" onClick={this.navExpand.bind(this)}>
                <div className="yhgl" data-navid="1"></div>
                <span data-navid="1">投票管理</span>
              </div>
              <div className="div3" style={{height: this.state.expand[1] ? "31px" : "0px"}}>
                <ul>
                  <li>
                    <Link to="/rank">查看投票排名</Link>
                  </li>
                </ul>
              </div>
              <a className="a1" href="javascript:void(0);">
                <div className="div2">
                  <div className="tcht"></div>
                  <span>退出后台</span>
                </div>
              </a>
            </div>
            <div className='goback' onClick={() => { 
                hashHistory.goBack()
              }
              }>返回</div>
          </div>
          <div className="right">
            <div style={{ marginTop: '1.5em' }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    expand: state.expand
  }),
  { getUsersData }
)(App)

