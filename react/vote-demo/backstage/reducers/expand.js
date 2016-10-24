import { NAVEXPANDSIPALY } from '../contants/VoteType.js'

const initialState = false

export default function update(state = initialState, action) {
	if (action.type === NAVEXPANDSIPALY) {
		return true
	} 
	return state
}
