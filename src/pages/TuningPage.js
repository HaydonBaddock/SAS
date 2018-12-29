import React, { Component } from 'react'

import Footer from '../components/Footer'

class TuningPage extends Component {
	static path = "/Tuning"
	static title = "Dyno Tuning"
	static colourImage = "tuning.jpg"
	static greyImage = "tuning_grey.jpg"

	render() {

		const styles = {
			main: {
				//height: "500px"
			},
			content: {

			},
			image: {
				width: "300px"
			},
			divFooter: {
				marginTop: "50px"
			}
		}

		return (
			<div style={styles.main}>

				<div>
					<h1>This is the Tuning page</h1>
					<img src={require("../images/car.jpg")} style={styles.image} />
				</div>

				<div style={styles.divFooter}>
					<Footer />
				</div>

			</div>
		)
	}
}

export default TuningPage
