import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'

export default class RepositoryPage extends Component {
	render() {
		return <Header as="h1">Repository Page</Header>
	}
}

// =============================================================================
// Container
// =============================================================================
export const container = connect()(RepositoryPage)