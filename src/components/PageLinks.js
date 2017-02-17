import React, { Component } from 'react'

import ServicingPage from '../pages/ServicingPage'
import RepairsPage from '../pages/RepairsPage'
import TuningPage from '../pages/TuningPage'
import ProductsPage from '../pages/ProductsPage'
import ElectricalPage from '../pages/ElectricalPage'
import DiagnosticsPage from '../pages/DiagnosticsPage'
import FabricationPage from '../pages/FabricationPage'
import PageInfo from './PageInfo'

class PageLinks extends Component {
	render() {

		const styles = {
			heading: {
				color: "#ddd",
				marginBottom: "-10px"
			},
			divCell: {
				marginTop: "30px"
			}
		}

		return (
			<div>
				<h2 className="col-xs-12" style={styles.heading}>Services</h2>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={ServicingPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={RepairsPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={TuningPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={ProductsPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={ElectricalPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={DiagnosticsPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={FabricationPage} /></div>
				<div className="col-md-3 col-sm-4 col-xs-6" style={styles.divCell}><PageInfo page={ServicingPage} /></div>
			</div>
		)
	}
}

export default PageLinks
