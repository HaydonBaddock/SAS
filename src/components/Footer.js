import React, { Component } from 'react'

class Footer extends Component {
	render() {

		const styles = {
			footerMain: {
        "width": "100%",
        "padding-bottom": "48px",
        "background-color": "#555", // #232323
				"text-align": "center"
			},
      imgLogo: {
        "width": "150px"
      },
      link: {
        // "text-decoration": "none",
        "color": "white",
        "font-weight": "bold"
      },
      text: {
				"margin-left": "auto",
				"margin-right": "auto",
				"color": "#ddd"
			}
    }

		return (
			<footer style={styles.footerMain}>
        <img src={require("../images/logo_small.png")} alt="Specialised Auto Services" style={styles.imgLogo} />
        <p><a href="https://www.facebook.com/search/top/?q=specialised%20auto%20services" style={styles.link}>Facebook</a></p>
				<p style={styles.text}>© Copyright 2017 Specialised Auto Services Ltd.</p>
			</footer>
		)
	}
}

export default Footer
