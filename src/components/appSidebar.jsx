import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { AppRouter } from './appRouter'

class AppSidebar extends Component {
	get menuItems() {
		const { history } = this.props

		return this.props.pages.map(({ name, route, iconName }) => (
			<Menu.Item as="a" key={name} name={name} onClick={() => history.push(route) }>
				<Icon name={iconName} />
				{name}
			</Menu.Item>
		))
	}

	render() {
		const { pages } = this.props

		return (
			<Sidebar.Pushable as={Segment} >
				<Sidebar as={Menu} visible vertical icon="labeled" width='thin'>
					{ this.menuItems }
				</Sidebar>
				<Sidebar.Pusher direction={'left'}>
					<Segment basic>
						<AppRouter pages={pages} />
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		)
	}
}

export default withRouter(AppSidebar)