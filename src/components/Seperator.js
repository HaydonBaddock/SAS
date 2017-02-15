import React, { Component } from 'react'

class Seperator extends Component {
  render() {

    const styles = {
      main: {
				width: "100%",
				height: "2px",
				backgroundColor: "#D91F26"
			},
    }

    return (
     <div style={styles.main} /> 
    )
  }
}

export default Seperator
