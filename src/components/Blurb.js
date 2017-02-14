import React, { Component } from 'react'

class Blurb extends Component {
	render() {

		const styles = {
      divMain: {
        textAlign: "left"
      },
			divTopSection: {
				color: "#ddd"
			},
			divSplitSection: {
				color: "#aaa"
			},
      divLeft: {
      },
      divRight: {
      }
		}

		return (
			<div className="center-block" style={styles.divMain}>

				<div className="col-xs-12" style={styles.divTopSection}>
					<h3>
						Specialist products and services.
					</h3>
					<p>
						We supply <strong>specialist</strong> products and services<br/>
						for a wide range of motoring applications<br/>
            
					</p>
				</div>

				<div style={styles.divSplitSection}>
					<div className="col-xs-12 col-md-8" style={styles.divLeft}>
						<h3>About</h3>
						<p>hyusduhkj uhj ujfy hi iul io iokoijiul ugy fty tr tyiu jkasfkj jiuijo ij ijl lijijoioj ytf dtr dtrc trfh yuafkjfdkmf rkm vfnla iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>
					</div>

					<div className="col-xs-12 col-md-4" style={styles.divRight}>
						<h3>Contact</h3>
						<p>hyusduhkj uhj ujiu iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>
					</div>
				</div>

      </div>
		)
	}
}

export default Blurb
