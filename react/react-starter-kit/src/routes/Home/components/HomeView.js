import React from 'react'
import WukongImage from '../assets/wukong.jpg'
import './HomeView.scss'

export const HomeView = () => (
	<div>
		<h4>Hello, Welcome!</h4>
		<img
			alt='This is a duck, because Redux!'
			className='duck'
			src={WukongImage} />
	</div>
)

export default HomeView
