import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AppSidebar from './appSidebar'
import { container as UserPage } from './userPage'
import { container as RepositoryPage } from './repositoryPage'

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

	componentDidMount() {
		this.props.onLoad()
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
