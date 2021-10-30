import axios from "axios";
import { GET_RESPONSES, DELETE_RESPONSE, CREATE_RESPONSE, UPDATE_RESPONSE, FETCH_BY_ID_RESPONSE, RESET_RESPONSE_REDUCER } from "./types";

// Get responses
export const getResponses = () => dispatch => {
  axios.get('/api/questionnaire/')
    .then(resp => {
      dispatch({
        type: GET_RESPONSES,
        payload: resp.data
      })
    }).catch(err => console.log(err))
}

// Delete response
export const deleteResponse = (id) => dispatch => {
  // console.log("delete id", id)
  axios.delete(`/api/questionnaire/${id}/`)
    .then(resp => {
      console.log("delete response", resp)
      dispatch({
        type: DELETE_RESPONSE,
        payload: id
      })
    }).catch(err => console.log(err))
}

// Create response
export const createResponse = (data) => dispatch => {
  // console.log("create response", data)
  axios.post(`/api/questionnaire/`, data)
    .then(resp => {
      dispatch({
        type: CREATE_RESPONSE,
        payload: resp
      })
    }).catch(err => console.log(err))
}

// Fetch response
export const fetchByIdResponse = (id) => dispatch => {
  // console.log("fetch by id response", id)
  axios.get(`/api/questionnaire/${id}/`)
    .then(resp => {
      // console.log("fetch by id response", resp.data)
      dispatch({
        type: FETCH_BY_ID_RESPONSE,
        payload: resp.data
      })
    }).catch(err => console.log(err))
}

// Update response
export const updateResponse = (id, data) => dispatch => {
  // console.log("update response", data)
  axios.put(`/api/questionnaire/${id}/`, data)
    .then(resp => {
      dispatch({
        type: UPDATE_RESPONSE,
        payload: id
      })
    }).catch(err => console.log(err))
}

// Reset reducer
export const resetReducer = () => dispatch => {
      dispatch({
        type: RESET_RESPONSE_REDUCER,
        payload: null
      })
}