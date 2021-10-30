import { GET_RESPONSES, DELETE_RESPONSE, CREATE_RESPONSE, UPDATE_RESPONSE, FETCH_BY_ID_RESPONSE, RESET_RESPONSE_REDUCER } from "../actions/types.js"

const initialState = {
  fetchAllResponsesSuccess: false,
  createSuccess: false,
  createFail: false,
  updateSuccess: false,
  updateFail: false,
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
        fetchAllResponsesSuccess: action.payload.success,
        responses: action.payload.data
      }
    case DELETE_RESPONSE:
      // console.log("Delete response", action.payload)
      return {
        ...state,
        responses: state.responses.filter(response => response.id != action.payload.data)
      }
    case CREATE_RESPONSE:
      // console.log("Create response", action.payload)
      return {
        ...state,
        createSuccess: action.payload.success,
        createFail: action.payload.fail
      }
    case FETCH_BY_ID_RESPONSE:
      // console.log("Fetch by id response", action.payload)
      return {
        ...state,
        fetchByIdSuccess: action.payload.success,
        fetchByIdData: action.payload.data
      }
    case UPDATE_RESPONSE:
      // console.log("Update response", action.payload)
      return {
        ...state,
        updateSuccess: action.payload.success,
        updateFail: action.payload.fail
      }
    case RESET_RESPONSE_REDUCER:
      return {
        fetchAllResponsesSuccess: false,
        createSuccess: false,
        createFail: false,
        updateSuccess: false,
        updateFail: false,
        fetchByIdSuccess: false,
        fetchByIdData: {},
        responses: []
      }
    default:
      return state
  }
}
