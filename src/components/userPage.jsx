import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
import UserList from './userList'

export default class UserPage extends Component {
	render() {
		return (
			<React.Fragment>
				<Header as="h1" >User Page</Header>
				<UserList users={this.props.users} />
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
