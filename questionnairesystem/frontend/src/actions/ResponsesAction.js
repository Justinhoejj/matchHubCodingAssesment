import axios from "axios";
import { GET_RESPONSES, DELETE_RESPONSE } from "./types";

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
  console.log("delete id", id)
  axios.delete(`/api/questionnaire/${id}/`)
    .then(resp => {
      console.log("delete response", resp)
      dispatch({
        type: DELETE_RESPONSE,
        payload: id
      })
    }).catch(err => console.log(err))
}