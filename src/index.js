import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import HomePage from './pages/HomePage'
import ServicingPage from './pages/ServicingPage'
import RepairsPage from './pages/RepairsPage'
import TuningPage from './pages/TuningPage'
import ElectricalPage from './pages/ElectricalPage'
import DiagnosticsPage from './pages/DiagnosticsPage'
import CustomFabricationPage from './pages/CustomFabricationPage'

class App extends Component {
	render() {
    return (
			<Router>
				<Route path="/" component={HomePage} />
				<Route path="Servicing" component={ServicingPage} />
				<Route path="Repairs" component={RepairsPage} />
				<Route path="Tuning" component={TuningPage}/>
				<Route path="Electrical" component={ElectricalPage} />
				<Route path="Diagnostics" component={DiagnosticsPage} />
				<Route path="CustomFabrication" component={CustomFabricationPage} />
			</Router>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
