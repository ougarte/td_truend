import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Application from '@core/components/app.jsx'
import mock from  '@core/mock.json'

import 'semantic-ui-css/semantic.min.css'

const container = document.getElementById('app')
const application =
	<BrowserRouter basename="/">
		<Application pages={mock.pages} />
	</BrowserRouter>

ReactDOM.render(application, container)
