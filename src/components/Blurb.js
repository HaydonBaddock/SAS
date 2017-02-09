import React, { Component } from 'react'

class Blurb extends Component {
	render() {

		const styles = {
			divMain: {
				"text-align": "justify"
			},
			textTitle: {
				"color": "#ddd",
				"font-size": "18pt"
			},
			textBody: {
				"color": "#ddd",
				"font-size": "14pt"
			}
		}

		return (
			<div style={styles.divMain}>
				<text style={styles.textTitle}>
					Better than the Competition.<br/>
				</text>
				<text style={styles.textBody}>
					ipsum dolor sit amet, consectetur adipisicing elit.<br/>
					Reiciendis, id, aut, officiis laboriosam a vero illo dolor<br/>
					asperiores provident quibusdam praesentium ipsum!
				</text>
			</div>
		)
	}
}

export default Blurb
