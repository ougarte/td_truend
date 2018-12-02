import logger from 'redux-logger'
import { fetchUsers } from '@core/lib/api'
import { USERS_LOADED } from './types'

export const UsersLoaded = (users) => ({ type: USERS_LOADED, payload: { users } })

export const loadUsers = () => dispatch => {
	fetchUsers()
		.then(data => dispatch(UsersLoaded(data)))
		.catch(error => logger.error(error))
}
