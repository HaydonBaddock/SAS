import React, { Component } from 'react'

import Footer from '../components/Footer'

class TuningPage extends Component {
	static path = "/#/Tuning"
	static title = "Dyno Tuning"
	static colourImage = "tuning.jpg"
	static greyImage = "tuning_grey.jpg"
	render() {
		return (
			<div>
				<h1>This is the Tuning page</h1>
				<Footer />
			</div>
		)
	}
}

export default TuningPage
