import React, { Component } from 'react'

class Blurb extends Component {
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
				<text style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
					Reiciendis, id, aut, officiis laboriosam a vero illo dolor<br/>
					asperiores provident quibusdam praesentium ipsum!
				</text>
			</div>
		)
	}
}

export default Blurb
