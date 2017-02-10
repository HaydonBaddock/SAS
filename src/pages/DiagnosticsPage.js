import React, { Component } from 'react'

import Footer from '../components/Footer'

class DiagnosticsPage extends Component {
  static path = "/#/Diagnostics"
	static title = "Diagnostics"
	static colourImage = "diagnostics.jpg"
	static greyImage = "diagnostics_grey.jpg"
	render() {
		return (
      <div>
        <h1>This is the Diagnostics page</h1>
        <Footer />
      </div>
		)
	}
}

export default DiagnosticsPage
