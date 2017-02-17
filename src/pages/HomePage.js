import React, { Component } from 'react'

import Banner from '../components/Banner'
import Blurb from '../components/Blurb'
import Details from '../components/Details'
import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'
//import Seperator from '../components/Seperator'

class HomePage extends Component {
	render() {

    const styles = {
      separator: {
        width: "100%",
        height: "2px",
        backgroundColor: "#D91F26"
      },

			section: {
				backgroundColor: "#000"
      },
      divBanner: {
      },
      divBlurb: {
				maxWidth: "1030px",
				//width: "80%"
      },
      divDetails: {
				maxWidth: "1030px",
				//width: "80%"
      },
      divPageLinks: {
				maxWidth: "1030px",
        //width: "80%"
      },
      divFooter: {
        marginTop: "80px"
      },
      divSeparator: {
				maxWidth: "1030px",
        //width: "80%"
      }
    }

    const Separator = () => (
      <div style={styles.separator} />
    )

		return (
			<section className="container-fluid" style={styles.section}>

				<div className="row" style={styles.divBanner}>
					<Banner />
				</div>

				<div className="row center-block" style={styles.divBlurb}>
					<Blurb />
				</div>

        <div className="row center-block" style={styles.divSeparator}>
          <Separator />
        </div>

				<div className="row center-block" style={styles.divDetails}>
					<Details />
				</div>

        <div className="row center-block" style={styles.divSeparator}>
          <Separator />
        </div>

				<div className="row center-block" style={styles.divPageLinks}>
					<PageLinks />
				</div>

				<div className="row" style={styles.divFooter}>
					<Footer />
				</div>

			</section>
		)
	}
}

export default HomePage
