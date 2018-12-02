import axios from 'axios'
import logger from 'redux-logger'

const ACCESS_TOKEN = ''
const transformResponse = response => response.data
const api = axios.create({
	baseURL: 'https://api.github.com/',
	params: {
		access_token: ACCESS_TOKEN
	}
})

// =============================================================================
// API USERS
// =============================================================================
export const fetchUser = async (username) => {
	try {
		const response = await api.get(`/users/${username}`)
		const data = transformResponse(response)

		return data
	} catch(error) {
		logger.error(error)
		throw new Error('INVALID_GET_USER')
	}
}

export const fetchUsers = async () => {
	try {
		const response = await api.get('/users')
		const data = transformResponse(response)
		const fetchs = data.map(item => fetchUser(item.login))
		const users = await Promise.all(fetchs)

		return users
	} catch (error) {
		logger.error(error)
		throw new Error('INVALID_GET_USERS')
	}
}

// =============================================================================
// API REPOSITORIES
// =============================================================================
export const fetchRepository = async (reponame) => {
	try {
		const response = await api.get(`/repos/${reponame}`)
		const repository = transformResponse(response)

		return repository
	} catch (error) {
		logger.error(error)
		throw new Error('INVALID_GET_REPOSITORY')
	}
}

export const fetchRepositories = async () => {
	try {
		const response = await api.get('/repositories')
		const data = transformResponse(response)
		const fetchs = data.map(item => fetchRepository(item.full_name))
		const repositories = await Promise.all(fetchs)

		return repositories
	} catch (error) {
		logger.error(error)
		throw new Error('INVALID_GET_REPOSITORIES')
	}
}
