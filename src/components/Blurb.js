import React, { Component } from 'react'

class Blurb extends Component {
	render() {

		const styles = {
			main: {
				textAlign: "center",
				color: "#ddd"
			}
		}

		return (
			<div className="col-xs-12" style={styles.main}>
				<h3>Specialist products and services.</h3>
				<p>
					We supply <strong>specialist</strong> products and services<br/>
					for a wide range of motoring applications<br/>
				</p>
			</div>
		)
	}
}

export default Blurb
