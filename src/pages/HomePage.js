import React, { Component } from 'react'

import Banner from '../components/Banner'
import Blurb from '../components/Blurb'
import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'

class HomePage extends Component {
	render() {

    const styles = {
			divMain: {
				backgroundColor: "#000" // #CBCBCB
      },
      divBanner: {
      },
      divBlurb: {
				maxWidth: "1030px",
				width: "80%",
				//marginTop: "815px"
      },
      divPageLinks: {
				maxWidth: "1030px",
        width: "80%"
      },
      divFooter: {
        marginTop: "80px"
      },
    }

		return (
			<div className="container-fluid" style={styles.divMain}>

				<div className="row" style={styles.divBanner}>
					<Banner />
				</div>

				<div className="row center-block" style={styles.divBlurb}>
					<Blurb />
				</div>

				<div className="row center-block" style={styles.divPageLinks}>
					<PageLinks />
				</div>

				<div className="row" style={styles.divFooter}>
					<Footer />
				</div>

			</div>
		)
	}
}

export default HomePage
