import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class Banner extends Component {
	render() {

		const styles = {
      // backdrop: {
      //   position: "absolute",
      //   width: "100%",
      // },
			carousel: {
				height: "800px"
			},
			imageCar: {
				height: "500px",
				width: "auto",
				marginTop: "200px"
			},
			logo: {
        position: "absolute",
        marginLeft: "auto",
				marginRight: "auto",
        left: "0",
        right: "0",
        top: "50px",
        width: "50%"
      }
		}

		return (
			<div>

				<Carousel style={styles.carousel}>
					<Carousel.Item>
						<img className="center-block" src={require("../images/showroom.png")} role="presentation" />
					</Carousel.Item>
					<Carousel.Item>
						<img className="center-block" src={require("../images/car.png")} role="presentation" style={styles.imageCar} />
					</Carousel.Item>
				</Carousel>

        <img src={require("../images/logo_large.png")} alt="Specialised Auto Services" style={styles.logo} />

			</div>
		)
	}
}

export default Banner
