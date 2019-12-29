import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'

export const apiCall = (request) => {
  const URL =  'https://cors-anywhere.herokuapp.com/'+'https://rickandmortyapi.com/api/character/';

  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };

  return fetch(URL, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export function* fetchCharacterRequest( action ){
  try {
    const response = yield call(apiCall, action.payload);
    yield put({ type: actions.fetchCharacterRequestSuccess, response });
  } catch(error) {
    console.log(error)
    yield put({ type: actions.fetchCharacterRequestError, error });
  }
}