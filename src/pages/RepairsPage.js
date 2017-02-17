import React, { Component } from 'react'

import Footer from '../components/Footer'

class RepairsPage extends Component {
	static path = "/#/Repairs"
	static title = "Repairs"
	static colourImage = "repairs.jpg"
	static greyImage = "repairs_grey.jpg"
	render() {
		return (
			<div>
				<h1>This is the Repairs page</h1>
				<Footer />
			</div>
		)
	}
}

export default RepairsPage
