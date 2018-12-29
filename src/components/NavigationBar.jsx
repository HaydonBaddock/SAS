import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../styles/css/navigation-bar.min.css'

export default class NavigationBar extends Component {
	render() {
		return (
			<div className="nav-bar">
				<Link to="/">Home</Link>
				<Link to="/">Products Services</Link>
				<Link to="/">Testimonials</Link>
				<Link to="/Contact">Contact</Link>
				<Link to="/">Where to find us</Link>
			</div>
		)
	}
}
