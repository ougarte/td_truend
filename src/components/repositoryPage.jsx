import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
import { loadRepositories, clearRepositories } from '@core/state/actions'

import CardList from './common/cardList'
import CardRepo from './cardRepo'

export default class RepositoryPage extends Component {
	get repoCards () {
		return this.props.repositories.map(repo => <CardRepo key={repo.id} {...repo}/>)
	}

	componentDidMount() {
		this.props.loadRepositories()
	}

	componentWillUnmount() {
		this.props.clearRepositories()
	}

	render() {
		return (
			<React.Fragment>
				<Header as="h1">Repository Page</Header>
				<CardList cardPerRow={5} cards={this.repoCards} />
			</React.Fragment>
		)
	}
}

// =============================================================================
// Container
// =============================================================================
const mapStateToProps = state => {
	return {
		repositories: state.repositories
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadRepositories: () => dispatch(loadRepositories()),
		clearRepositories: () => dispatch(clearRepositories())
	}
}

export const container = connect(mapStateToProps, mapDispatchToProps)(RepositoryPage)
