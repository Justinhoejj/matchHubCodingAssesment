import React, { Fragment, useEffect } from 'react'
import { withAlert } from 'react-alert'

// Caller of alert must pass in alertMessage and onClose callback function
export const Alerts = (props) => {
  useEffect(() => {
    if(props.displayAlert) {
      props.alert.show(props.alertMessage)
      props.onClose() // Function callback after display
    }
  }, [props.displayAlert])

  return (<Fragment />)
}

export default withAlert()(Alerts)