import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

import Application from '@core/components/app.jsx'
import { users } from '@core/state/reducers'
import mock from  '@core/mock.json'

import '@babel/polyfill'
import 'semantic-ui-css/semantic.min.css'

const store = createStore(users, composeWithDevTools(
  applyMiddleware(logger),
))
const container = document.getElementById('app')
const application =
	<BrowserRouter basename="/">
		<Provider store={store}>
			<Application pages={mock.pages} />
		</Provider>
	</BrowserRouter>

ReactDOM.render(application, container)
