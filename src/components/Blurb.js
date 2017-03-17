import React, { Component } from 'react'

class Blurb extends Component {
	render() {

		const styles = {
			main: {
				textAlign: "center",
				color: "#ddd"
			},
			text: {
				fontSize: "15pt"
			}
		}

		return (
			<div className="col-xs-12" style={styles.main}>
				<p style={styles.text}>
					We supply <strong>specialist</strong> products and services<br/>
					for a wide range of motoring applications.<br/>
				</p>
			</div>
		)
	}
}

export default Blurb
