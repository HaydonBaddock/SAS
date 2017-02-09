import React, { Component } from 'react'

import Banner from '../components/Banner'
import Blurb from '../components/Blurb'
import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'

class HomePage extends Component {
	render() {

    const styles = {
			divMain: {
        "position": "relative",
				"height": "1500px",
				"background-color": "black"
      },
      divBanner: {
      },
      divBlurb: {
				"position": "absolue",
				"margin-top": "-170px"
      },
      divPageLinks: {
        "position": "absolute",
				"margin-left": "auto",
				"margin-right": "auto",
				"left": "0",
				"right": "0",
        "width": "60%"
      },
      divFooter: {
        
      }
    }

		return (
			<div style={styles.divMain}>

        <div style={styles.divBanner}>
          <Banner />
        </div>

        <div style={styles.divBlurb}>
				  <Blurb />
        </div>

        <div style={styles.divPageLinks}>
				  <PageLinks />
        </div>

        <div style={styles.divFooter}>
				  <Footer />
        </div>
			</div>
		)
	}
}

export default HomePage
