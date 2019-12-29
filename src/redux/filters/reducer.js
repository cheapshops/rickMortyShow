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

const toggleFilter = ( state, action ) => {
    let oldFilters = state.filters
    return update( state, {
        filters: {
            [action.payload.main]: {
                [action.payload.sub]: {$set : !oldFilters[action.payload.main][action.payload.sub] }
            }
        }
    })
}

export default handleActions(
    {
        [constants.TOGGLE_FILTER]: toggleFilter
    },
    initialState
)