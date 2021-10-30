import { GET_RESPONSES, DELETE_RESPONSE, CREATE_RESPONSE, UPDATE_RESPONSE, FETCH_BY_ID_RESPONSE, RESET_RESPONSE_REDUCER } from "../actions/types.js"

const initialState = {
  fetchAllResponsesSuccess: false,
  createSuccess: false,
  updateSuccess: false,
  fetchByIdSuccess: false,
  fetchByIdData: {},
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
    case CREATE_RESPONSE:
      // console.log("Create response", action.payload)
      return {
        ...state,
        createSuccess: true,
      }
    case FETCH_BY_ID_RESPONSE:
      // console.log("Fetch by id response", action.payload)
      return {
        ...state,
        fetchByIdSuccess: true,
        fetchByIdData: action.payload
      }
    case UPDATE_RESPONSE:
      // console.log("Update response", action.payload)
      return {
        ...state,
        updateSuccess: true,
      }
    case RESET_RESPONSE_REDUCER:
      return {
        fetchAllResponsesSuccess: false,
        createSuccess: false,
        updateSuccess: false,
        fetchByIdSuccess: false,
        fetchByIdData: {},
        responses: []
      }
    default:
      return state
  }
}
