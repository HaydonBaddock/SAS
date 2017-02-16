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
      profilePic: {
        float: "left",
        width: "150px",
        marginRight: "25px"
      },
      profileText: {
        marginTop: "43px"
      }
		}

    const Profile = ({picture, name, position}) => (
      <div className="row" style={styles.profile}>
        <img src={require("../images/" + picture)} role="presentation" className="img-circle" style={styles.profilePic} />
        <div style={styles.profileText}>
          <h3><strong>{name}</strong></h3>
          <p>{position}</p>
        </div>
      </div>
    )

		return (
      <div style={styles.main}>

        <div className="col-xs-12 col-md-8">
          <h1>About</h1>
          <p>hyusduhkj uhj ujfy hi iul io iokoijiul ugy fty tr tyiu jkasfkj jiuijo ij ijl liWFEOIJ;Al wrWFJ;OIF AJ J REAS;OIF SA;REFjijoioj ytf hl ilij jk jli uli uil ui uj ui iludtr dtrc trfh yuafkjfdkmf rkm vfnla iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>

          <Profile picture="profile_pic.png" name="Richard Baddock" position="Mechanical Engineer & Co-Founder" />
          <Profile picture="profile_pic.png" name="Jason Anderson" position="Electrical Engineer & Co-Founder" />
          <Profile picture="profile_pic.png" name="John Cena" position="Wrestler" />
        </div>

        <div className="col-xs-12 col-md-4">
          <h1>Contact</h1>
          <p>hyusduhkj uhj ujiu iu iuuiluli uiui ujhiulilu uil lijil lijji jiil iljil lijlijilj jillij lijlij lij iljijiuji yhu tfy rft dedc rft</p>
        </div>

      </div>
		)
	}
}

export default Details
