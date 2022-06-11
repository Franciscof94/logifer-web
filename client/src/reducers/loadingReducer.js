import { LOADER } from "../actions/types"

const initialState = {
    isLoading: true
}

const loadingActionReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADER: return {
            ...state,
            isLoading : action.payload
        }
        default: return state
    }
}

export default loadingActionReducer 