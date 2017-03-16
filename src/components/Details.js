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
			},
			link: {
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

				<div className="row">
					<div className="col-xs-12">
						<h1>About</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12 col-md-9">
						<Profile picture="profile_pic.png" name="Richard Baddock" position="Mechanical Engineer & Co-Founder" />
						<Profile picture="profile_pic.png" name="Jason Anderson" position="Electrical Engineer & Co-Founder" />
						<Profile picture="profile_pic.png" name="Other Guy" position="Mechanic" />
					</div>

					<div className="col-xs-12 col-md-3">
						<h1>Contact</h1>
						<p>
							272 Whites Rd<br/>
							RD2 Kaiapoi<br/>
							CHRISTCHURCH
						</p>
						<p>
							mechanicl inquiries  <strong>027 363 4473</strong><br/>
							electrical inquiries  <strong>027 336 0044</strong>
						</p>
						<a href="mailto:specialisedauto@outlook.com"><strong>specialisedauto@outlook.com</strong></a>

						<br/>
						<h1>Braketech</h1>
						<p>SAS business partner</p>
						<p>Suppliers of high quality brake and clutch products for performance road to top level Motorsport.</p>
						<a href="http://braketechnz.com/" target="_blank" style={styles.link}><strong>braketechnz.com</strong></a>
					</div>
				</div>

			</div>
		)
	}
}

export default Details
