import React, { Component } from 'react'

class Banner extends Component {
	render() {

		const styles = {
      backdrop: {
        "width": "100%"
      },
      logo: {
				"position": "absolute",
				"margin-left": "auto",
				"margin-right": "auto",
				"left": "0",
				"right": "0",
				"top": "80px",
        "width": "50%"
      }
		}

		return (
      <div>
        <img src={require("../images/backdrop.png")} style={styles.backdrop} />
        <img src={require("../images/main_logo.png")} style={styles.logo} />
      </div>
		)
	}
}

export default Banner
