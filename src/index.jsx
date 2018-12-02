import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import Application from '@core/components/app.jsx'
import { users } from '@core/state/reducers'
import mock from  '@core/mock.json'
import { loadUsers } from '@core/state/actions'

import '@babel/polyfill'
import 'semantic-ui-css/semantic.min.css'
import './custom.css'

const store = createStore(users, composeWithDevTools(applyMiddleware(logger, thunk)))
const onLoad = () => store.dispatch(loadUsers())
const container = document.getElementById('app')
const application = (
	<Provider store={store}>
		<BrowserRouter basename="/">
			<Application pages={mock.pages} onLoad={onLoad} />
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(application, container)
