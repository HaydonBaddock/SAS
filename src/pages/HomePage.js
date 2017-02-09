import React, { Component } from 'react'

import Banner from '../components/Banner'
import Blurb from '../components/Blurb'
import PageLinks from '../components/PageLinks'
import Footer from '../components/Footer'

class HomePage extends Component {
	render() {

    const styles = {
			divMain: {
				"width": "100%",
				"height": "1500px",
				"background-color": "#222"
      },
			divImages: {
				"position": "relative"
			},
			logo: {
				"position": "absolute"
      },
      backdrop: {
        "width": "100%"
      },
      divPageLinks: {
        "position": "absolute",
				"margin-top": "50px",
				"margin-left": "auto",
				"margin-right": "auto",
				"left": "0",
				"right": "0",
        "width": "50%"
      },
      divFooter: {
        "margin-top": "620px"
      },
    }

		return (
			<div className="container" style={styles.divMain}>

				<div className="row">
					<div className="col-xs-12" style={styles.divImages}>
						<img src={require("../images/main_logo.png")} className="col-xs-offset-3 col-xs-6" style={styles.logo} />
						<img src={require("../images/backdrop.png")} style={styles.backdrop} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<Blurb />
					</div>
				</div>

				{/*<div className="row">
					<div className="col-xs-offset-3 col-xs-6">
						<PageLinks />
					</div>
        </div>*/}

        {/*<div style={styles.divFooter}>
				  <Footer />
        </div>*/}
			</div>
		)
	}
}

export default HomePage
