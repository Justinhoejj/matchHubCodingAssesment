import React, { Component, Fragment, useEffect } from 'react'
import { withAlert } from 'react-alert'

export const Alerts = (props) => {
  useEffect(() => {
    if(props.displayAlert) {
      props.alert.show(props.alertMessage)
      props.onClose()
    }
  }, [props.displayAlert])

  return (<Fragment />)
}

export default withAlert()(Alerts)