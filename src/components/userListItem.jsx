import React, { Component } from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

export default class UserListItem extends Component {
	render() {
		const { created_at, avatar_url, name, location, html_url } = this.props
		const createdDate = new Date(created_at)

		return (
			<Card>
				<Image src={avatar_url} />
				<Card.Content>
					<Card.Header><a target="_blank" rel="noreferrer noopener" href={html_url} >{name}</a></Card.Header>
					<Card.Meta>
						<span className='date'>Joined in {createdDate.getFullYear()}</span>
					</Card.Meta>
					<Card.Description>{name} currently lives in {location}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='github' size="large" />
					</a>
				</Card.Content>
			</Card>
		)
	}
}
