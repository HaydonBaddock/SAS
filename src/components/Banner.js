import React, { Component } from 'react'

class Banner extends Component {
	render() {

		const styles = {
      divMain: {
        "position": "relative"
      },
      backdrop: {
        "position": "absolute",
        "width": "100%"
      },
			logo: {
        "position": "absolute",
        "margin-left": "auto",
				"margin-right": "auto",
        "left": "0",
        "right": "0",
        "top": "50px",
        "width": "50%"
      },
		}

		return (
			<div style={styles.divMain}>
        <img src={require("../images/backdrop.png")} style={styles.backdrop} />
        <img src={require("../images/logo_large.png")} style={styles.logo} />
			</div>
		)
	}
}

export default Banner
