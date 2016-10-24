import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { addUser } from '../actions/users'

class AddUser extends Component {
	constructor(props, context) {
		super(props, context)
		this.username = '';
		this.password = '';
		this.description = '';
		this.mobile = '';
		this.gender = 'boy';
	}

	componentDidMount() {
		this.refs.male.checked = 'true';
	}

	getInputValue(event) {
		let kind = event.target.className,
			value = event.target.value;
		switch (kind) {
			case 'username': this.username = value; break;
			case 'password': this.password = value; break;
			case 'description': this.description = value; break;
			case 'mobile': this.mobile = value; break;
		}
	}

	getGenderValue(event) {
		if (event.target.value === 'boy') {
			this.gender = 'boy';
		} else {
			this.gender = 'girl';
		}
	}

	sumitUserInfo() {
		if (!this.username) {
			alert('请输入用户名');
			return false
		} 
		if (!this.password) {
			alert('请输入密码');
			return false
		} 
		if (!this.description) {
			alert('请输入自我描述');
			return false
		} 
		if (!/^\d{11}$/.test(this.mobile)) {
			alert('请输入正确格式的手机号码！')
			return false
		}

		fetch('/vote/register/data', {
			method: 'POST',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.username,
				mobile: this.mobile,
				description: this.description,
				password: this.password,
				gender: this.gender
			})
		}).then((res) => {
			return res.json()
		}).then((json) => {
			let users = this.props.users.sort((a, b) => {
				return a.rank - b.rank
			})
			
			if (json.errno === 0) {
				let user = {
					description: this.description,
					gender: this.gender,
					head_icon: this.gender === 'boy' ? "/images/boy.png" : "/images/girl.png",
					id: json.id,
					mobile: this.mobile,
					password: this.password,
					rank: users[users.length-1].rank,
					username: this.username,
					vfriend: [],
					vote: 0,
					vote_times: 0
				}
				this.props.addUser(user);
				alert('添加成功');
				hashHistory.push('/users');
			}
		})
	}
 
	render() {
		return (
			<div>
				<ul className="add_user">
					<li>
						<span>用户名：</span>
						<div className="input_content">
							<input type="text" className="username" onChange={this.getInputValue.bind(this)}/>
						</div>
					</li>
					<li>
						<span>密码：</span>
						<div className="input_content">
							<input type="password" className="password" onChange={this.getInputValue.bind(this)}/>
						</div>
					</li>
					<li>
						<span>自我描述：</span>
						<div className="input_content">
							<input type="text" className="description" onChange={this.getInputValue.bind(this)}/>
						</div>
					</li>
					<li>
						<span>手机号码：</span>
						<div className="input_content">
							<input type="text" className="mobile" onChange={this.getInputValue.bind(this)}/>
						</div>
					</li>
					<li>
						<div className="gender">
							<input type="radio" value="boy" name="sex" ref='male' onChange={this.getGenderValue.bind(this)}/>
							<span>男</span>
							<input type="radio" value="girl" name="sex" onChange={this.getGenderValue.bind(this)}/>
							<span>女</span>
						</div>
					</li>
				</ul>
				<div className="add_btn" onClick={this.sumitUserInfo.bind(this)}>
					确认添加
				</div>
			</div>
		)
	}
}

export default connect(
  state => ({
  	users: state.users
  }),
  { addUser }
)(AddUser)
