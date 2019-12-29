import { createAction } from 'redux-actions'
import * as constants from './constants'

export const fetchCharacterRequest = createAction( constants.FETCH_CHARACTER_REQUEST )
export const fetchCharacterRequestSuccess = createAction( constants.FETCH_CHARACTER_REQUEST_SUCCESS )
export const fetchCharacterRequestError = createAction( constants.FETCH_CHARACTER_REQUEST_ERROR )