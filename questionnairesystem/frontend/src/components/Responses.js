import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getResponses, deleteResponse } from '../actions/ResponsesAction'

const Responses = (props) => {
  const [allResponses, setAllResponses] = useState([]);

  useEffect(() => {
    props.getResponses()
  }, [])

  useEffect(() => {
    setAllResponses(() => props.allResponses)
  }, [props.allResponses])

  return (
    <div className="container-fluid">
      <h3>Responses</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Favourite Color</th>
            <th>Coding Languages</th>
            <th>Spoken Languages</th>
            <th>Would Pay for Resume Review</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allResponses.map(response => (
            <tr key={response.id}>
              <td>{response.name}</td>
              <td>{response.favouriteColors.replace(/,/g, ", ")}</td>
              <td>{response.programmingLanguage}</td>
              <td>{response.spokenLanguages.replace(/,/g, ", ")}</td>
              <td>{response.isWillingToPay ? "Yes" : "No"}</td>
              <td>
                <Link to={`/edit?id=${response.id}`}>
                  <button className="btn btn-warning btn-sm">
                    Edit
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => props.deleteResponse(response.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  fetchAllResponsesSuccess: state.responsesReducer.fetchAllResponsesSuccess,
  allResponses: state.responsesReducer.responses
})

const mapDispatchToProps = {
  getResponses: getResponses,
  deleteResponse: deleteResponse,
}

export default connect(mapStateToProps, mapDispatchToProps)(Responses)