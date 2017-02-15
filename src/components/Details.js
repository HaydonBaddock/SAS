import React, { Component } from 'react'

class Details extends Component {
	render() {

		const styles = {
			main: {
				color: "#aaa",
        textAlign: "left"
			},
      profile: {
        margin: "20px 0 20px 0"
      },
      image: {
        width: "150px",
        float: "left"
      }
		}

		return (
      <div style={styles.main}>
        <div className="col-xs-12 col-md-8">
          <h3>About</h3>
          <p>hyusduhkj uhj ujfy hi iul io iokoijiul ugy fty tr tyiu jkasfkj jiuijo ij ijl liWFEOIJ;Al wrWFJ;OIF AJ J REAS;OIF SA;REFjijoioj ytf hl ilij jk jli uli uil ui uj ui iludtr dtrc trfh yuafkjfdkmf rkm vfnla iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>

          <div className="container row" style={styles.profile}>
            <img src={require("../images/profile_pic.png")} alt="Richard Baddock" className="img-circle col-xs-2" style={styles.image} />
            <p className="col-xs-10">judjdsjisdkjdsjlkdskjdskjdslkdskds</p>
          </div>

          <div className="container row" style={styles.profile}>
            <img src={require("../images/profile_pic.png")} alt="Richard Baddock" className="img-circle col-xs-2" style={styles.image} />
            <p className="col-xs-10">judjdsjisdkjdsjlkdskjdskjdslkdskds</p>
          </div>

        </div>

        <div className="col-xs-12 col-md-4">
          <h3>Contact</h3>
          <p>hyusduhkj uhj ujiu iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>
        </div>
      </div>
		)
	}
}

export default Details
