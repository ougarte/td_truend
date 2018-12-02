import deepmerge from 'deepmerge'

import { USERS_LOADED } from './types'

export const initialState = {
	users: []
}

export const users = (state = initialState, action) => {
	const { type, payload } = action
	const stateCopy = deepmerge({}, state)

	switch(type) {
		case USERS_LOADED:
			return deepmerge(stateCopy, payload)
		default: return stateCopy
	}
}
