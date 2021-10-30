import React from 'react'
import { connect } from 'react-redux'
import QuestionnaireForm from '../components/QuestionnaireForm'

export const CreateResponsePage = (props) => {
  
  const createNew = (formData) => {
    console.log(formData)
  }
  return (
    <div className="container-sm">
      <h2>Create New Response</h2>
      <QuestionnaireForm 
        buttonName="beep"
        handleSubmit={createNew}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResponsePage)
