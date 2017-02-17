import React, { Component } from 'react'

import Footer from '../components/Footer'

class ServicingPage extends Component {
	static path = "/#/Servicing"
	static title = "Servicing"
	static colourImage = "servicing.jpg"
	static greyImage = "servicing_grey.jpg"
	render() {
		return (
			<div>
				<h1>This is the Servicing page</h1>
				<Footer />
			</div>
		)
	}
}

export default ServicingPage
