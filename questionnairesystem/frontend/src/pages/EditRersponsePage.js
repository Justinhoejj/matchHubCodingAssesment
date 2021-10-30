import React from 'react'
import { connect } from 'react-redux'
import { updateResponse } from '../actions/ResponsesAction'
import { QuestionnaireForm } from '../components/QuestionnaireForm'

export const EditRersponsePage = (props) => {
  const idToEdit = new URLSearchParams(window.location.search).get("id")
  
  return (
    <div>
      <QuestionnaireForm 
      buttonName="Save"
      handleSubmit={updateResponse}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRersponsePage)
