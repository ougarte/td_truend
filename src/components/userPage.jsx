import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
import CardList from './common/cardList'
import CardUser from './cardUser'

export default class UserPage extends Component {
	get userCards () {
		return this.props.users.map(user => (<CardUser key={user.id} {...user} />))
	}

	render() {
		return (
			<React.Fragment>
				<Header as="h1" >User Page</Header>
				<CardList cardPerRow={5} cards={this.userCards} />
			</React.Fragment>
		)
	}
}

// =============================================================================
// Container
// =============================================================================
const mapStateToProps = (state) => {
	return {
		users: state.users
	}
}

export const container = connect(mapStateToProps)(UserPage)
