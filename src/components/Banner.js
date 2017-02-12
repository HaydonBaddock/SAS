import React, { Component } from 'react'

class Banner extends Component {
	render() {

		const styles = {
      divMain: {
        position: "relative",
				// backgroundImage: "url({require(\"../images/backdrop.png\")})"
      },
      backdrop: {
        position: "absolute",
        width: "100%",
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
			// carousel: {
			// 	position: "absolute",
			// 	width: "100%",
			// 	marginTop: "250px"
			// }
		}

		return (
			<div style={styles.divMain}>

        <img src={require("../images/backdrop.png")} role="presentation" style={styles.backdrop} />
        <img src={require("../images/logo_large.png")} alt="Specialised Auto Services" style={styles.logo} />

				{/*<div className="carousel" data-ride="carousel" style={styles.carousel}>

					<ol className="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
					</ol>

					<div className="carousel-inner" role="listbox">
						<div className="item active">
							<img className="center-block" src={require("../images/car.png")} />
						</div>
						<div className="item">
							<img src={require("../images/servicing.jpg")} />
						</div>
					</div>

					<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
						<span className="glyphicon glyphicon-chevron-left" area-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
						<span className="glyphicon glyphicon-chevron-right" area-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>*/}

			</div>
		)
	}
}

export default Banner
