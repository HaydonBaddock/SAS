import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

import './styles/css/index.min.css'

class App extends Component {
	render() {
		return (
			<Router>
				<div id="index">

					<NavigationBar/>

					<div className="container">
						<Route path="/" component={HomePage}/>
						<Route path="/Contact" component={ContactPage}/>
					</div>

					<Footer/>

				</div>
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))
