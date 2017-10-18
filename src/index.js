import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import './styles/css/index.min.css'

class App extends Component {
	render() {
		return (
			<div id="index">
				<NavigationBar/>

				<div className="container">
					<Router>
						<Route path="/" component={ContactPage}/>
						<Route path="/Contact" component={HomePage}/>
					</Router>
				</div>

				<Footer/>
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
)
