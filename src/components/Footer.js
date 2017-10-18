import React, { Component } from 'react'

import '../styles/css/footer.min.css'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div className="separator"/>
				<img src={require("../images/logo_small.png")} alt="Specialised Auto Services" className="image-logo"/>
				<p><a href="https://www.facebook.com/SASworkshop/" target="_blank" className="link"><strong>Facebook</strong></a></p>
				<p className="text">© Copyright 2017 Specialised Auto Services Ltd.</p>
			</footer>
		)
	}
}
