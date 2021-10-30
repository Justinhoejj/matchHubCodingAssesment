import { GET_RESPONSES, DELETE_RESPONSE } from "../actions/types.js"

const initialState = {
  fetchAllResponsesSuccess: false,
  responses: []
}
export default function ResponsesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESPONSES:
      // console.log("Get reponses", action.payload)
      return {
        ...state,
        fetchAllResponsesSuccess: true,
        responses: action.payload
      }
    case DELETE_RESPONSE:
      // console.log("Delete response", action.payload)
      return {
        ...state,
        responses: state.responses.filter(response => response.id != action.payload)
      }
    default:
      return state
  }
}
