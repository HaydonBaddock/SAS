import React, { Component } from 'react'

import ServicingPage from '../pages/ServicingPage'
import RepairsPage from '../pages/RepairsPage'
import TuningPage from '../pages/TuningPage'
import ElectricalPage from '../pages/ElectricalPage'
import DiagnosticsPage from '../pages/DiagnosticsPage'
import CustomFabricationPage from '../pages/CustomFabricationPage'
import PageInfo from './PageInfo'

class PageLinks extends Component {
	render() {

    const styles = {
      divMain: {
        "display": "table",
        "table-layout": "fixed"
      },
      divRow: {
        "display": "table-row"
      },
      divCell: {
        "display": "table-cell"
      }
    }

		return (
			<div style={styles.divMain}>
        <div style={styles.divRow}>
          <div style={styles.divCell}><PageInfo page={ServicingPage} /></div>
          <div style={styles.divCell}><PageInfo page={RepairsPage} /></div>
          <div style={styles.divCell}><PageInfo page={TuningPage} /></div>
        </div>
        <div style={styles.divRow}>
          <div style={styles.divCell}><PageInfo page={ElectricalPage} /></div>
          <div style={styles.divCell}><PageInfo page={DiagnosticsPage} /></div>
          <div style={styles.divCell}><PageInfo page={CustomFabricationPage} /></div>
        </div>
			</div>
		)
	}
}

export default PageLinks
