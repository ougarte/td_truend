import logger from 'redux-logger'
import {
fetchUsers,
fetchRepositories
} from '@core/lib/api'
import {
	USERS_LOADED,
	REPOSITORIES_LOADED,
	REPOSITORIES_CLEAR
} from './types'

// API Actions
export const UsersLoaded = (users) => ({ type: USERS_LOADED, payload: { users } })
export const RepositoriesLoaded = (repositories) => ({ type: REPOSITORIES_LOADED, payload: { repositories } })

export const loadUsers = () => dispatch => {
	fetchUsers()
		.then(data => dispatch(UsersLoaded(data)))
		.catch(error => logger.error(error))
}

export const loadRepositories = () => dispatch => {
	fetchRepositories()
		.then(data => dispatch(RepositoriesLoaded(data)))
		.catch(error => logger.error(error))
}

// UI Actions
export const clearRepositories = () => ({ type: REPOSITORIES_CLEAR, payload: { repositories: [] } })