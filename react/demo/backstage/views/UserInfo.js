import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { navExpandDisplay } from '../actions/expand'
import { getUsersData } from '../actions/users'

class Userinfo extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			name: '',
			gender: '',
			mobile: '',
			description: '',
			rank: '',
			vote: ''
		}
	}

	componentDidMount() {
		let userID = +this.props.params.userID,
			user = {};
		if (this.props.users.length) {
		 	user = this.getUser(this.props.users, userID)
		 	this.setState({
		 		name: user.username,
		 		gender: user.gender,
		 		mobile: user.mobile,
		 		description: user.description,
		 		rank: user.rank,
		 		vote: user.vote
		 	})

		} else {
		  let url = '/vote/index/data';
		  fetch(url).then((response) => {
		    return response.json()
		  }).then((json) => {
		  	if (json.errno === 0) {
		  	  this.props.getUsersData(json.data.objects);
		  	}
		    user = this.getUser(json.data.objects, userID)
		    this.setState({
		    	name: user.username,
		    	gender: user.gender,
		    	mobile: user.mobile,
		    	description: user.description,
		    	rank: user.rank,
		    	vote: user.vote
		    })
		  }).catch((er) => {
		    console.log('parsing failed', er)
		  })
		}
		this.props.navExpandDisplay();
	}

	getUser(users, id) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				return users[i]
			}
		}
	}

	render() {
		return (
			<div>
				<ul className="user_detail">
					<li>
						<div className='line'>
							<div className="user_detail_name">姓名：</div>
							<div className="user_detail_content">{this.state.name}</div>
						</div>
					</li>
					<li>
						<div className='line'>
							<div className="user_detail_name">性别：</div>
							<div className="user_detail_content">{this.state.gender}</div>
						</div>
					</li>
					<li>
						<div className='line'>
							<div className="user_detail_name">手机号码：</div>
							<div className="user_detail_content">{this.state.mobile}</div>
						</div>
					</li>
					<li>
						<div className='line'>
							<div className="user_detail_name">自我描述：</div>
							<div className="user_detail_content">{this.state.description}</div>
						</div>
					</li>
					<li>
						<div className='line'>
							<div className="user_detail_name">排名：</div>
							<div className="user_detail_content">{this.state.rank}</div>
						</div>
					</li>
					<li>
						<div className='line'>
							<div className="user_detail_name">票数：</div>
							<div className="user_detail_content">{this.state.vote}</div>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}

export default connect(
  state => ({
  	users: state.users
  }),
  { navExpandDisplay, getUsersData}
)(Userinfo)
