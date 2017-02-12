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
          position: "relative",
					// width: "100%",
          maxWidth: "228px", // 220
          // height: "228px", // 158
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

      image: {
        base: {
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: "0",
          right: "0",
          transition: "opacity 0.4s",
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
          margin: "10px 0 10px 0",
				  transition: "color 0.4s"
        },
        lit: {
				  color: "#ECE01C"  // DF060A
        },
        dim: {
          color: "#fff"
        }
      }
    }

    return (
			<a href={this.props.page.path} style={{...styles.anchor.base,...this.state.mouseOver ? styles.anchor.lit : styles.anchor.dim}} onMouseEnter={this.onMouseMoveHandler} onMouseLeave={this.onMouseMoveHandler}>
        <img src={require("../images/servicing_grey.jpg")} role="presentation" />
        <img src={require("../images/servicing.jpg")} role="presentation" style={{...styles.image.base,...this.state.mouseOver ? styles.image.lit : styles.image.dim}} />
				<h3 style={{...styles.text.base,...this.state.mouseOver ? styles.text.lit : styles.text.dim}}>{this.props.page.title}</h3>
			</a>
    )
  }
}

export default PageInfo

// {require("../images/" + this.props.page.greyImage)}
// {require("../images/" + this.props.page.colourImage)}
