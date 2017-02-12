import React, { Component } from 'react'

import Footer from '../components/Footer'

class FabricationPage extends Component {
  static path = "/#/Fabrication"
	static title = "Fabrication"
	static colourImage = "fabrication.jpg"
	static greyImage = "fabrication_grey.jpg"
	render() {
		return (
      <div>
        <h1>This is the Fabrication page</h1>
        <Footer />
      </div>
		)
	}
}

export default FabricationPage
