import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { updateResponse, resetReducer, fetchByIdResponse } from '../actions/ResponsesAction'
import { QuestionnaireForm } from '../components/QuestionnaireForm'

export const EditRersponsePage = (props) => {
  const idToEdit = new URLSearchParams(window.location.search).get("id")
  const [existingFormData, setExistingFormData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [redirect, setRedirect] = useState(false)


  useEffect(() => {
    props.fetchByIdReponse(idToEdit)
  }, [])

  useEffect(() => {
    return () => {
      props.resetReducer()
    }
  },[])

  useEffect(() => {
    if (props.fetchByIdResponseSuccess) {
      setExistingFormData(() => props.fetchByIdResponseData)
      setLoaded(() => true)
    }
  }, [props.fetchByIdResponseSuccess])

  useEffect(() => {
    if(props.editResponseSuccess) {
      setRedirect(() => true)
    }
    
  }, [props.editResponseSuccess])

  return (
    <div>
      {loaded && (
        <QuestionnaireForm
          buttonName="Save"
          handleSubmit={(data) => props.updateResponse(idToEdit, data)}
          defaultData={existingFormData}
        />
      )}
      {redirect && <Redirect to="/"/>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  editResponseSuccess: state.responsesReducer.updateSuccess,
  fetchByIdResponseSuccess: state.responsesReducer.fetchByIdSuccess,
  fetchByIdResponseData: state.responsesReducer.fetchByIdData
})

const mapDispatchToProps = {
  fetchByIdReponse: fetchByIdResponse,
  updateResponse: updateResponse,
  resetReducer: resetReducer,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRersponsePage)
