import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import AppSidebar from './appSidebar'
import UserPage from './userPage'
import RepositoryPage from './repositoryPage'

/**
 * @class Application
 * @description
 */
export default class Application extends Component {
	static getComponentByName(componentName) {
		// TODO: Refactor by a ComponentFactory
		switch(componentName) {
			case 'UserPage': return UserPage
			case 'RepositoryPage': return RepositoryPage
			default: return React.Fragment
		}
	}

	constructor(props) {
		super(props)
		const pages = props.pages.map(({ componentName, ...props}) => {
			const component = Application.getComponentByName(componentName)

			return { component, ...props }
		})

		this.state = { pages }
	}

	render() {
		return (
			<React.Fragment>
				<Container fluid>
					<AppSidebar pages={this.state.pages}  />
				</Container>
			</React.Fragment>
		)
	}
}
