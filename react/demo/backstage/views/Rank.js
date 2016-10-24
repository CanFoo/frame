import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { getUsersData } from '../actions/users'
import { Tab } from '../components'

class Rank extends Component {
	constructor(props, context) {
	  super(props, context)
	  this.state = {
	    usersData: [],
	    currentUpdata: false
	  }
	}

	componentWillMount() {
	  if (this.props.users.length) {
	  	this.setState({
	  		usersData: this.props.users
	  	})
	  } else {
	  	this.setState({
	  	  currentUpdata: true
	  	})
	    let url = '/vote/index/data';
	    fetch(url).then((response) => {
	      return response.json()
	    }).then((json) => {
	      if (json.errno === 0) {
	        this.props.getUsersData(json.data.objects);
	        this.setState({
	        	usersData: json.data.objects
	        })
	      }
	    }).catch((er) => {
	      console.log('parsing failed', er)
	    })
	  }
	}


	render() {
		return (
			<div>
				<Tab 
					currentUpdata={this.state.currentUpdata}	
					rankUsers={this.state.usersData.sort((a, b) => {
						return a.rank - b.rank
					})} 
					tableItem={['排名', '票数', '姓名', '性别']}
					dataItem={['rank', 'vote', 'username', 'gender']}
				/>
			</div>
		)
	}
}

export default connect(
  state => ({
    users: state.users
  }),
  { getUsersData }
)(Rank)
