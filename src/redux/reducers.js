import { combineReducers } from 'redux'
import characters from './characters/reducer'
import filters from './filters/reducer'

const rootReducer = combineReducers({
  characters,
  filters
})

export default rootReducer