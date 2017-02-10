import React, { Component } from 'react'

class Blurb extends Component {
	render() {

		const styles = {
      divMain: {
        "text-align": "center",
        "width": "calc(100% / 1.5)",
        "margin-left": "auto",
				"margin-right": "auto",
        "color": "#777"
      },
			textTitle: {
				"color": "#ddd",
				"font-size": "18pt"
			},
			textBody: {
				"color": "#ddd",
				"font-size": "14pt"
			},
      divLeft: {
        "display": "inline-block",
        "width": "calc(60%)",
        "padding": "10px"
      },
      divRight: {
        "display": "inline-block",
        "width": "calc(30%)",
        "margin-left": "auto",
        "padding": "30px"
      }
		}

		return (
			<div style={styles.divMain}>
				<text style={styles.textTitle}>
					Better than the Competition.<br/>
				</text>
				<text style={styles.textBody}>
					ipsum dolor sit amet, consectetur adipisicing elit.<br/>
					Reiciendis, id, aut, officiis laboriosam a vero illo dolor<br/>
					asperiores provident quibusdam praesentium ipsum!
				</text>

        <div style={styles.divLeft}>
          <h3>About</h3>
          <p>hyusduhkj uhj ujfy hi iul io iokoijiul ugy fty tr tyiu jkasfkj jiuijo ij ijl lijijoioj ytf dtr dtrc trfh yuafkjfdkmf rkm vfnla iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>
        </div>

        <div style={styles.divRight}>
          <h3>Contact</h3>
          <p>hyusduhkj uhj ujiu iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>
        </div>
      </div>
		)
	}
}

export default Blurb
