import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class CardList extends Component {
	render() {
		return (
				<Card.Group itemsPerRow={this.props.cardPerRow}>
					{this.props.cards}
				</Card.Group>
		)
	}
}
