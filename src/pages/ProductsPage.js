import React, { Component } from 'react'

import Footer from '../components/Footer'

class ProductsPage extends Component {
	static path = "/Products"
	static title = "Products"
	static colourImage = "products.jpg"
	static greyImage = "products_grey.jpg"
	render() {
		return (
			<div>
				<h1>This is the Products page</h1>
				<Footer />
			</div>
		)
	}
}

export default ProductsPage
