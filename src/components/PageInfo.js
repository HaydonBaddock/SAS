import React, { Component } from 'react'

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

    const styles = {
      anchor: {
        base: {
          "float": "left",
          "margin": "20px",
          "text-decoration": "none",
          "max-width": "226px",
          "background-color": "#333",
          "transition": "border 0.4s"
        },
        lit: {
          "border": "solid 3px #ECE01C" // DF060A
        },
        dim: {
          "border": "solid 3px #333"
        }
      },

      image: {
        base: {
          "margin-top": "-180",
          "transition": "opacity 0.4s"
        },
        lit: {
				  "opacity": "1"
        },
        dim: {
				  "opacity": "0"
        }
      },

      text: {
        base: {
          "text-align": "center",
          "margin-top": "-3px",
				  "transition": "color 0.4s"
        },
        lit: {
				  "color": "#ECE01C"  // DF060A
        },
        dim: {
          "color": "#fff"
        }
      }
    }

    return (
			<a href={this.props.page.path} style={{...styles.anchor.base,...this.state.mouseOver ? styles.anchor.lit : styles.anchor.dim}} onMouseEnter={this.onMouseMoveHandler} onMouseLeave={this.onMouseMoveHandler}>
        <img src={require("../images/" + "servicing_grey.jpg")} />
        <img src={require("../images/" + "servicing.jpg")} style={{...styles.image.base,...this.state.mouseOver ? styles.image.lit : styles.image.dim}} />
				<h3 style={{...styles.text.base,...this.state.mouseOver ? styles.text.lit : styles.text.dim}}>{this.props.page.title}</h3>
			</a>
    )
  }
}

export default PageInfo

// this.props.page.greyImage
// this.props.page.colourImage
