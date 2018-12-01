import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

// Helpers
const createPageRoute = ({
	name,
	route,
	component,
}) => <Route key={name} path={route} component={component} />

export const AppRouter = (props) => {
	const { pages } = props
	const routers = pages.map(createPageRoute)

	return (
		<Switch>
			<Redirect exact path="/" to="/users" />
			{ routers }
		</Switch>
	)
}

AppRouter.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		route: PropTypes.string,
		component: PropTypes.func
	}))
}
