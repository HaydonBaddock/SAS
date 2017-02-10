import React, { Component } from 'react'

import Banner from '../components/Banner'
import Blurb from '../components/Blurb'
import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'

class HomePage extends Component {
	render() {

    const row = {
      "height": "200px"
    }

    const styles = {
			divMain: {
        "width": "100%",
				"background-color": "#111" // #CBCBCB
      },
      divBanner: {
      },
      divBlurb: {
      },
      divPageLinks: {
        "margin-left": "auto",
				"margin-right": "auto",
        "width": "calc(100% / 1.5)",
        "margin-top": "750px"
      },
      divFooter: {
        "margin-top": "100px"
      },
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
