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
      heading: {
        "color": "#777"
      },
      divTable: {
        "display": "table",
        "table-layout": "fixed"
      },
      divRow: {
        "display": "table-row"
      },
      divCell: {
        "display": "table-cell",
        "width": "20%"
      }
    }

		return (
      <div>
        <h2 style={styles.heading}>Pages</h2>
        <div style={styles.divTable}>
          <div style={styles.divRow}>
            <div style={styles.divCell}><PageInfo page={ServicingPage} /></div>
            <div style={styles.divCell}><PageInfo page={RepairsPage} /></div>
            <div style={styles.divCell}><PageInfo page={TuningPage} /></div>
            <div style={styles.divCell}><PageInfo page={ElectricalPage} /></div>
          </div>
          <div style={styles.divRow}>
            <div style={styles.divCell}><PageInfo page={DiagnosticsPage} /></div>
            <div style={styles.divCell}><PageInfo page={CustomFabricationPage} /></div>
            <div style={styles.divCell}><PageInfo page={ServicingPage} /></div>
            <div style={styles.divCell}><PageInfo page={RepairsPage} /></div>
          </div>
        </div>
      </div>
		)
	}
}

export default PageLinks
