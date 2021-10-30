import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { createResponse, resetReducer } from '../actions/ResponsesAction'
import QuestionnaireForm from '../components/QuestionnaireForm'

export const CreateResponsePage = (props) => {
  
  const [redirect, setRedirect] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if(props.createResponseSuccess) {
      setRedirect(() => true)
    }
    if(props.createResponseFail) {
      setShowError(() => true)
    }
  }, [props.createResponseSuccess, props.createResponseFail])

  useEffect(() => {
    return () => {
      props.resetReducer()
    }
  },[])

  return (
    <div className="container-sm">
      <h2>Create New Response</h2>
      <QuestionnaireForm 
        buttonName="Submit"
        handleSubmit={props.createResponse}
        defaultData={null}
      />
      {redirect && <Redirect to="/"/>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  createResponseSuccess: state.responsesReducer.createSuccess,
  createResponseFail: state.responsesReducer.createFail,
})

const mapDispatchToProps = {
  createResponse: createResponse,
  resetReducer: resetReducer,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResponsePage)
