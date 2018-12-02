import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class CardRepo extends Component {
	render() {
		const { created_at, description, name, html_url, open_issues_count, forks_count } = this.props
		const createdDate = new Date(created_at)

		return (
			<Card>
				<Card.Content>
					<Card.Header><a target="_blank" rel="noreferrer noopener" href={html_url} >{name}</a></Card.Header>
					<Card.Meta>
						<span className='date'>Created in {createdDate.getFullYear()}</span>
					</Card.Meta>
					<Card.Description>{description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<span>Opened issues {open_issues_count}</span>
					<span>Forks {forks_count}</span>
				</Card.Content>
			</Card>
		)
	}
}
