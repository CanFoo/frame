import React, { Component, PropTypes } from 'react'
import '../style/style.css'
import classnames from 'classnames'
import fetchJsonp from 'fetch-jsonp'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchBox: true
    }
  }
  componentWillMount() {
    // console.log(this.props)
    // fetchJsonp('https://api.m.taobao.com/h5/mtop.film.mtopshowapi.getsoonshowsbycitycode/5.0/?v=5.0&api=mtop.film.MtopShowAPI.getSoonShowsByCityCode&appKey=12574478&t=1480915405121&type=jsonp&sign=b2641ac7e35c02934b9efecd148ac9d2&data=%7B%22asac%22%3A%22D679AU6J95PHQT67G0B5%22%2C%22platform%22%3A%228%22%2C%22cityCode%22%3A310100%2C%22pageSize%22%3A20%2C%22pageIndex%22%3A1%2C%22fieldExcludeOrInclude%22%3A%22i%3Aid%3BshowName%3BshowNameEn%3Bhighlight%3Bposter%3Bdirector%3BleadingRole%3Bactivities%3Bremark%3BshowMark%3Btype%3Bduration%3BopenDay%3Bcountry%3BisOpenChina%3BopenTime%3Bpreview%3BwantCount%3BisWant%3BavailableScheduleCount%3BavailableTodayScheduleCount%22%7D')
    // .then(function(response) {
    //   return response.json()
    // }).then(function(json) {
    //   console.log('parsed json', json)
    // }).catch(function(ex) {
    //   console.log('parsing failed', ex)
    // })

  }
  onInput(event) {
    this.props.getThenShow(event.target.value);
    this.setState({
      showSearchBox: true
    })
  }
  jumpSearchContent(event) {
    window.open(`https://www.baidu.com/s?word=${encodeURIComponent(event.target.innerHTML)}`, '_blank');
  }
  clickSerchContent() {
    var content = this.refs.content.value;
    window.open(`https://www.baidu.com/s?word=${encodeURIComponent(content)}`, '_blank');
  }
  noShowSearchBox(event) {
    if(event.target.className === 'box') {
      this.setState({
        showSearchBox: false
      })
    }
  }
  render() {
    var id = 0;
    return (
      <div className="box" onClick={ this.noShowSearchBox.bind(this) }>
        <div className="container">
          <p>我的百度</p>
          <input id="text" type="text" onInput={ this.onInput.bind(this) } ref="content" />
          <input id="btn" type="button" value="百度一下" onClick={() => this.clickSerchContent()}/>
        </div>
        <ul id="search" style={{display: this.props.searchLists.length && this.state.showSearchBox ? 'block' : 'none'}}
          onClick={ this.jumpSearchContent }>
          {
            this.props.searchLists.map(item => <li key={ id++ }>{ item }</li>)
          }
        </ul> 
      </div>
    )
  }
}

Search.propTypes = {
  searchLists: PropTypes.array.isRequired,
  getThenShow: PropTypes.func.isRequired
};

export default Search
