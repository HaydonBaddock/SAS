import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ServicingPage from './pages/ServicingPage'
import RepairsPage from './pages/RepairsPage'
import TuningPage from './pages/TuningPage'
import ProductsPage from './pages/ProductsPage'
import ElectricalPage from './pages/ElectricalPage'
import DiagnosticsPage from './pages/DiagnosticsPage'
import FabricationPage from './pages/FabricationPage'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" component={HomePage} />
					<Route path="/Servicing" component={ServicingPage} />
					<Route path="/Repairs" component={RepairsPage} />
					<Route path="/Tuning" component={TuningPage} />
					<Route path="/Products" component={ProductsPage} />
					<Route path="/Electrical" component={ElectricalPage} />
					<Route path="/Diagnostics" component={DiagnosticsPage} />
					<Route path="/Fabrication" component={FabricationPage} />
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
