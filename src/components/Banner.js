import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class Banner extends Component {
	render() {

		var backdrop = require("../images/showroom.png")
		var imageOne = require("../images/car.png")
		var imageTwo = require("../images/car.png")

		const styles = {
			carousel: {
				width: "100%",
				//height: "800px", // SAD
				backgroundImage: "url(" + backdrop + ")",
				backgroundPosition: "center center",
				backgroundSize: "cover"
			},
			carouselItem: {
				base: {
					//width: "100%",
					height: "800px",
					backgroundRepeat: "no-repeat"
				},
				itemOne: {
					backgroundImage: "url(" + imageOne + ")",
					backgroundSize: "700px",
					backgroundPosition: "50% 70%"
				},
				itemTwo: {
					backgroundImage: "url(" + imageTwo + ")"
				}
			},
			logo: {
				position: "absolute",
				marginLeft: "auto",
				marginRight: "auto",
				left: "0",
				right: "0",
				top: "50px",
				width: "80%",
				maxWidth: "1030px"
			}
		}

		return (
			<div>
				<Carousel indicators={false} style={styles.carousel}>
					<Carousel.Item>
						<div style={{...styles.carouselItem.base,...styles.carouselItem.itemOne}} />
					</Carousel.Item>
					<Carousel.Item>
						<div style={{...styles.carouselItem.base,...styles.carouselItem.itemOne}} />
					</Carousel.Item>
				</Carousel>

				<img src={require("../images/logo_large.png")} alt="Specialised Auto Services" style={styles.logo} />
			</div>
		)
	}
}

export default Banner
