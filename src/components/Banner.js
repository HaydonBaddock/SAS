import React, { Component } from 'react'

class Banner extends Component {
	render() {

		const styles = {
      divMain: {
        position: "relative",
				// backgroundImage: "url({require(\"../images/backdrop.png\")})"
      },
      backdrop: {
        position: "absolute",
        width: "100%"
      },
			logo: {
        position: "absolute",
        marginLeft: "auto",
				marginRight: "auto",
        left: "0",
        right: "0",
        top: "50px",
        width: "50%"
      },
		}

		return (
			<div style={styles.divMain}>
        <img src={require("../images/backdrop.png")} role="presentation" style={styles.backdrop} />
        <img src={require("../images/logo_large.png")} alt="Specialised Auto Services" style={styles.logo} />
			</div>
		)
	}
}

export default Banner
