import React, { PropTypes, Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getUsersData } from '../actions/users'
import classnames from 'classnames'
import '../lib/style.css'


class Tab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      usersData: [],
      users: [],
      pages: [],
      initPagesStyle: [],
      page_entry: 10,
      total_pages: 0,
      start_page: 0,
      current_page: 0,
      displayPagesNum: 9,
      lessPageDisaplay: false,
      morePageDispalay: true,
      table_item: [],
      data_item: []
    };
    this.initPagesStyleStatus = false;
    this.currentUpdata = false;
  }

  componentDidMount() {
  	this.setState({
  		table_item: this.props.tableItem,
  		data_item: this.props.dataItem
  	})
    this.currentUpdata = this.props.currentUpdata;
    if ( this.currentUpdata === false) {
      this.initPageModel.call(this, this.props.rankUsers);
    }
  }

  componentDidUpdate() {
    if (this.state.initPagesStyle[0]) {
      return false;
    }
    if (this.currentUpdata === true) {
      this.currentUpdata = false;
      this.initPageModel.call(this, this.props.rankUsers);
    }
    this.upDataCurrentPageStyle()
  }

  componentWillReceiveProps() {
    this.initPageModel.call(this, this.props.rankUsers);
  }

  initPageModel(usersData) {
    let total = usersData.length,
        pageNum = Math.ceil(total/this.state.page_entry),
        total_pages = pageNum + 1,
        initPagesStyle = [],
        pages = [];

    if (pageNum > this.state.displayPagesNum) {
      pageNum =  this.state.displayPagesNum
    } else {
      this.setState({
        morePageDispalay: false
      })
    }

    for (let i=0; i<pageNum; i++) {
      pages[i] = i;
      initPagesStyle[i] = 0;
    }
    if (this.initPagesStyleStatus === false) {
      initPagesStyle[0] = 1;
    }
    this.setState({
      usersData: usersData,
      users: usersData.slice(0, this.state.page_entry),
      pages: pages,
      total_pages: total_pages,
      initPagesStyle: initPagesStyle
    })
  }

  upDataCurrentPageStyle() {
    let pageEles = this.refs.pagemodel.querySelectorAll('li'),
        pageId = 0;

    Array.prototype.forEach.call(pageEles, (ele, index) => {
      pageId = +ele.children[0].getAttribute('data-page');
      if (pageId === this.state.current_page) {
        ele.children[0].className = "select_page";
      } else {
        ele.children[0].className = "";
      }
    })
  }

  clickPage(event) {
    let item = +event.target.getAttribute('data-page'),
        offsetPage = item - this.state.start_page - (this.state.displayPagesNum+1)/2;
    
    if (item === 0) {  
      item = +this.refs.pagemodel.querySelector('.select_page').getAttribute('data-page') - 1; 
      if (item === 0) {
        return false;
      }
      offsetPage = item - this.state.start_page - (this.state.displayPagesNum+1)/2;
    } else if (item === this.state.total_pages) {
      item = +this.refs.pagemodel.querySelector('.select_page').getAttribute('data-page') + 1;
      if (item === this.state.total_pages) {
        return false;
      }
      offsetPage = item - this.state.start_page - (this.state.displayPagesNum+1)/2;
    }

    this.setState({
       current_page: item,
       users: this.state.usersData.slice((item - 1) * this.state.page_entry , (item - 1) * this.state.page_entry + this.state.page_entry)
    });

    if (item < 6) {
      this.setState({
        lessPageDisaplay: false
      })
    } else {
      this.setState({
        lessPageDisaplay: true
      })
    }

    if (item >= this.state.total_pages - (this.state.displayPagesNum+1)/2) {
      this.setState({
        morePageDispalay: false
      })
    } else {
      this.setState({
        morePageDispalay: true
      })
    }

    if (item < (this.state.displayPagesNum+1)/2 ) {
      this.setState({
        start_page: 0
      })
    } else if (item > this.state.total_pages - (this.state.displayPagesNum+1)/2 ) {
      this.setState({
        start_page: this.state.total_pages - this.state.displayPagesNum - 1
      })
    } else {
      if (offsetPage) {
        this.setState({
          start_page: this.state.start_page + offsetPage 
        })
      } else {
        this.setState({
          start_page: this.state.start_page - offsetPage
        })
      }
    }
    this.state.initPagesStyle[0] = 0;
    this.initPagesStyleStatus = true;
    this.setState({
      initPagesStyle: this.state.initPagesStyle
    })
  }

  render() {
    let id = 0;
    return (
      <div>
        <table className="table table-bordered table-hover definewidth m10">
          <thead>
          <tr>
          	{
          		this.state.table_item.map((item) => {
          			return  <th key={'tableitem' + id++}>
          					 {item}
          					</th>
          		})
          	}
          	<th>更多信息</th>
          </tr>
          </thead>
          <tbody>
            {
              id = 0,
              this.state.users.map((item) => {
                return  <tr key={'user' + id++}>
                    			{
                    				this.state.data_item.map((initem) => {
                    					return <td key={'item' + id++}>
                    								{item[initem]}
                    							</td>
                    				})
                    			}
            							<td>
            								<button type="submit" className="morebtn">
                              <Link to={`/user/${item.id}`}>更多</Link>
                            </button>
            							</td>
                        </tr>
              })
            }
          </tbody>
        </table>
        <ul id="menu">
          <li><a href="javascript:void(0);" data-page="0" onClick={this.clickPage.bind(this)}>Previous</a></li>
          <li style={{display: this.state.lessPageDisaplay ? "inline-block" : "none"}}>
            <a href="javascript:void(0);" data-page="1" onClick={this.clickPage.bind(this)}>
              1
            </a>
          </li>
          <li style={{display: this.state.lessPageDisaplay ? "inline-block" : "none"}}>...</li>
          <li>
             <ul ref="pagemodel">
              { 
                id = 0,
                this.state.pages.map((item) => {
                  return  <li key={'page' + id++}>
                            <a href="javascript:void(0);" className={classnames({select_page: this.state.initPagesStyle[item]})} data-page={this.state.start_page+item+1} onClick={this.clickPage.bind(this)}>
                              {this.state.start_page+item+1}
                            </a>
                          </li>
                })
              }
            </ul>
          </li>
          <li style={{display: this.state.morePageDispalay ? "inline-block" : "none"}}>...</li>
          <li style={{display: this.state.morePageDispalay ? "inline-block" : "none"}}>
            <a href="javascript:void(0);" data-page={this.state.total_pages - 1} onClick={this.clickPage.bind(this)}>
              {this.state.total_pages - 1 }
            </a>
          </li>
          <li><a href="javascript:void(0);" data-page={this.state.total_pages} onClick={this.clickPage.bind(this)}>Next</a></li>
        </ul>
      </div>
    )
  }
}

export default Tab

