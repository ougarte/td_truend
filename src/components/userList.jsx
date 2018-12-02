import React, { Component } from 'react'
import { Container, Card } from 'semantic-ui-react'
import UserListItem from './userListItem'

export default class UserList extends Component {
	get items() {
		return this.props.users.map(user => (<UserListItem key={user.id} {...user} />))
	}

	render() {
		return (
				<Card.Group itemsPerRow={5}>
					{this.items}
				</Card.Group>
		)
	}
}
