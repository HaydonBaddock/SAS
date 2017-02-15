import React, { Component } from 'react'

class Footer extends Component {
	render() {

		const styles = {
			main: {
        width: "100%",
        paddingBottom: "48px",
        backgroundColor: "#fff",
				textAlign: "center"
			},
			divSeparator: {
				width: "100%",
				height: "20px",
				backgroundColor: "#555"
			},
      imgLogo: {
        width: "150px",
				margin: "40px 0 40px 0"
      },
      link: {
        color: "#555",
        fontWeight: "bold"
      },
      text: {
				color: "#555"
			}
    }

		return (
			<footer style={styles.main}>
				<div style={styles.divSeparator} />
        <img src={require("../images/logo_small.png")} alt="Specialised Auto Services" style={styles.imgLogo} />
        <p><a href="https://www.facebook.com/search/top/?q=specialised%20auto%20services" style={styles.link}>Facebook</a></p>
				<p style={styles.text}>© Copyright 2017 Specialised Auto Services Ltd.</p>
			</footer>
		)
	}
}

export default Footer
