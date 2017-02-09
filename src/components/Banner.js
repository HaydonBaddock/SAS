import React, { Component } from 'react'

import Blurb from '../components/Blurb'

class Banner extends Component {
	render() {

		const styles = {
      backdrop: {
        "width": "100%"
      },
      logo: {
        "width": "50%"
      }
		}

		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<img src={require("../images/backdrop.png")} style={styles.backdrop} />
						<img src={require("../images/main_logo.png")} className="center-block" style={styles.logo} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4">
						<Blurb />
					</div>
				</div>
			</div>
		)
	}
}

export default Banner
