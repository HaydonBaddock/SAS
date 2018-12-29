import React, { Component } from 'react'

import Footer from '../components/Footer'

class ElectricalPage extends Component {
	static path = "/Electrical"
	static title = "Electrical"
	static colourImage = "electrical.jpg"
	static greyImage = "electrical_grey.jpg"
	render() {
		return (
			<div>
				<h1>This is the Electrical page</h1>
				<Footer />
			</div>
		)
	}
}

export default ElectricalPage
