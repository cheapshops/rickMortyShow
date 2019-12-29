import { handleActions } from 'redux-actions'
import update from "immutability-helper";
import * as constants from "../constants"

let initialState = {
    filters: {
        species: {
            "Human": false,
            "Mytholog": false,
            "Other Species": false,
        },
        gender: {
            "Male": false,
            "Female": false
        },
        origin: {
            "Unknown": false,
            "Post-Apocalyptic Earth": false,
            "Nuptia 4": false,
            "Other Orign": false
        }
    },
    sort: {
        Ascending: false,
        Descending: false
    },
    searchText: ""
}


export default handleActions(
  {

  },
  initialState
)