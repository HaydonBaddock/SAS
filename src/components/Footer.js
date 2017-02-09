import React, { Component } from 'react'

class Footer extends Component {
	render() {

		const styles = {
			divMain: {
				"text-align": "center"
			},
      text: {
				"margin-left": "auto",
				"margin-right": "auto",
				"color": "#ddd"
			}
    }

		return (
			<div style={styles.divMain}>
				<text style={styles.text}>Footer goes here</text>
			</div>
		)
	}
}

export default Footer
