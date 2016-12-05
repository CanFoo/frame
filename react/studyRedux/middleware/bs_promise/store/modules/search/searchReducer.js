import {SHOW_MESSAGE_SUCESS} from '../../types'
import initState from './searchInitState'

export default function search(state=initState, action) {
	switch(action.type) {
		case SHOW_MESSAGE_SUCESS:
			if (typeof action.payload === "string") { //如果请求有问题，action中定义了
				return [action.payload]
			}
		  	return action.payload
		default:
	  		return state
	}
}


