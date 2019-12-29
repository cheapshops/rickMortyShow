import { takeLatest } from 'redux-saga/effects'
import * as constants from './constants'

import { fetchCharacterRequest } from './characters/action'

function* watchActions() {
  yield takeLatest( constants.FETCH_CHARACTER_REQUEST, fetchCharacterRequest)
}

export default function* rootSaga() {
  yield watchActions()
}