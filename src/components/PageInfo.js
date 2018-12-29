import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PageInfo extends Component {
	constructor() {
		super()
		this.state = {mouseOver: false}
		this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this)
	}

	onMouseMoveHandler() {
		this.setState(prevState => ({
			mouseOver: !prevState.mouseOver
		}))
	}

	render() {

		var urlGrey = require("../images/servicing_grey.jpg")
		var urlColoured = require("../images/servicing.jpg")

		const styles = {
			anchor: {
				base: {
					width: "100%",
					float: "left",
					textDecoration: "none",
					backgroundColor: "#333",
					padding: "2px 2px 0 2px",
					borderTop: "2px solid #333",
					borderRight: "2px solid #333",
					borderLeft: "2px solid #333",
					borderBottom: "4px solid #333",
					transition: "border 0.4s"
				},
				lit: {
					borderBottom: "4px solid #ECE01C" // DF060A
				},
				dim: {
					borderBottom: "4px solid #333"
				}
			},

			divImages: {
				position: "relative",
				minHeight: "158px",
				maxHeight: "158px",
				overflow: "hidden"
			},

			image: {
				grey: {
					backgroundImage: "url(" + urlGrey + ")",
				},
				colour: {
					backgroundImage: "url(" + urlColoured + ")",
				},
				base: {
					position: "absolute",
					width: "100%",
					minWidth: "220px",
					minHeight: "158px",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
					backgroundSize: "cover",
					transition: "opacity 0.4s"
				},
				lit: {
					opacity: "1"
				},
				dim: {
					opacity: "0"
				}
			},

			text: {
				base: {
					textAlign: "center",
					margin: "15px 0 11px 0",
					transition: "color 0.4s"
				},
				lit: {
					color: "#ECE01C"	// D91F26
				},
				dim: {
					color: "#aaa"
				}
			}
		}

		return (
			<Link to={this.props.page.path} style={{...styles.anchor.base,...this.state.mouseOver ? styles.anchor.lit : styles.anchor.dim}} onMouseEnter={this.onMouseMoveHandler} onMouseLeave={this.onMouseMoveHandler}>
				<div style={styles.divImages}>
					<div style={{...styles.image.grey,...styles.image.base}} />
					<div style={{...styles.image.colour,...styles.image.base,...this.state.mouseOver ? styles.image.lit : styles.image.dim}} />
				</div>
				<h3 style={{...styles.text.base,...this.state.mouseOver ? styles.text.lit : styles.text.dim}}>{this.props.page.title}</h3>
			</Link>
		)
	}
}

export default PageInfo
