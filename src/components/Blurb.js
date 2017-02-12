import React, { Component } from 'react'

class Blurb extends Component {
	render() {

		const styles = {
      divMain: {
        textAlign: "center",
        width: "100%"
      },
			divTopSection: {
				color: "#ddd"
			},
			divSplitSection: {
				color: "#777"
			},
      divLeft: {
      },
      divRight: {
      }
		}

		return (
			<div className="center-block" style={styles.divMain}>

				<div style={styles.divTopSection}>
					<h3>
						Better than the Competition.
					</h3>
					<p>
						ipsum dolor sit amet, consectetur adipisicing elit.<br/>
						Reiciendis, id, aut, officiis laboriosam a vero illo dolor<br/>
						asperiores provident quibusdam praesentium ipsum!
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
