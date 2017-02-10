import React, { Component } from 'react'

import Footer from '../components/Footer'

class CustomFabricationPage extends Component {
  static path = "/#/CustomFabrication"
	static title = "Custom Fabrication"
	static colourImage = "custom_fabrication.jpg"
	static greyImage = "custom_fabrication_grey.jpg"
	render() {
		return (
      <div>
        <h1>This is the Custom Fabrication page</h1>
        <Footer />
      </div>
		)
	}
}

export default CustomFabricationPage
