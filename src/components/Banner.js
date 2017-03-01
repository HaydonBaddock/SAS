import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class Banner extends Component {
	render() {

		//var backdrop = require("../images/showroom.png")
		var car = require("../images/car.jpg")
		var boat = require("../images/boat.jpg")
		var plane = require("../images/plane.jpg")

		const styles = {
			carousel: {
				width: "100%",
				//height: "800px", // SAD
				//backgroundImage: "url(" + backdrop + ")",
				//backgroundPosition: "center center",
				//backgroundSize: "cover"
			},
			carouselItem: {
				base: {
					width: "100%",
					height: "800px",
					backgroundSize: "cover",
					//backgroundRepeat: "no-repeat"
					backgroundPosition: "center center"
				},
				car: {
					backgroundImage: "url(" + car + ")"
				},
				boat: {
					backgroundImage: "url(" + boat + ")"
				},
				plane: {
					backgroundImage: "url(" + plane + ")"
				},
				text: {
					// position: "absolute",
					// marginLeft: "auto",
					// marginRight: "auto",
					// left: "0",
					// right: "0",
					color: "white",
					fontSize: "30pt",
					fontWeight: "bold"

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
					<Carousel.Item alt="CARS">
						<div style={{...styles.carouselItem.base,...styles.carouselItem.car}} />
						<div className="carousel-caption"><text style={styles.carouselItem.text}>Automotive</text></div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={{...styles.carouselItem.base,...styles.carouselItem.plane}} />
						<div className="carousel-caption"><text style={styles.carouselItem.text}>Aircraft</text></div>
					</Carousel.Item>
					<Carousel.Item>
						<div style={{...styles.carouselItem.base,...styles.carouselItem.boat}} />
						<div className="carousel-caption"><text style={styles.carouselItem.text}>Jet Boats</text></div>
					</Carousel.Item>
				</Carousel>

				<img src={require("../images/logo_large.png")} alt="Specialised Auto Services" style={styles.logo} />
			</div>
		)
	}
}

export default Banner
