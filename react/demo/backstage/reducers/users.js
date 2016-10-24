import { GETALLDATA, USERSDATA, ADDUSER } from '../contants/VoteType.js'

const initialState = []
export default function update(state = initialState, action) {
	if (action.type === GETALLDATA) {
		return action.users
	} else if (action.type === USERSDATA) {
		return state
	} else if (action.type === ADDUSER) {
		state.push(action.user);
		return state
	}
	return state
}


