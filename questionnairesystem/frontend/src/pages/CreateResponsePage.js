import React from 'react'
import { connect } from 'react-redux'
import QuestionnaireForm from '../components/QuestionnaireForm'

export const CreateResponsePage = (props) => {
  
  return (
    <div className="container-sm">
      <QuestionnaireForm />
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResponsePage)
