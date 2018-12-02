import deepmerge from 'deepmerge'

import {
	USERS_LOADED,
	REPOSITORIES_LOADED,
	REPOSITORIES_CLEAR } from './types'

export const initialState = {
	users: [],
	repositories: [],
}

export const users = (state = initialState, action) => {
	const { type, payload } = action
	const stateCopy = deepmerge({}, state)

	switch(type) {
		case USERS_LOADED: return deepmerge(stateCopy, payload)
		case REPOSITORIES_LOADED: return deepmerge(stateCopy, payload)
		case REPOSITORIES_CLEAR: return Object.assign(stateCopy, payload)
		default: return stateCopy
	}
}
