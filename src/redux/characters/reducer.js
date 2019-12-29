import { handleActions } from 'redux-actions'
import update from "immutability-helper";
import * as constants from "../constants"

let initialState = {
    data: [],
    isLoading: false,
    message: ''
}

const fetchCharacterRequest = ( state, action ) => {
  return update( state, {
    isLoading: { $set: true },
    isLoading: { $set: true },
    message: { $set: "" },
  })
}

const fetchCharacterRequestSuccess = ( state, action ) => {
  return update( state, {
    data: { $set: action.response.results || []},
    isLoading: { $set: false },
    message: { $set: "Success" },
  })
}

const fetchCharacterRequestError = ( state, action ) => {
  return update( state, {
    isLoading: { $set: false },
    message: { $set: "Failed" },
  })
}

export default handleActions(
  {
    [constants.FETCH_CHARACTER_REQUEST]: fetchCharacterRequest,
    [constants.FETCH_CHARACTER_REQUEST_SUCCESS]: fetchCharacterRequestSuccess,
    [constants.FETCH_CHARACTER_REQUEST_ERROR]: fetchCharacterRequestError
  },
  initialState
)