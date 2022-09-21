import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

//INITIAL STATE FOR USERSTATE
const initialState = {
    fetching: false,
    token: null,
    error: null,
    loged: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.value) {
        case API_CALL_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
                loged: false,
                token: null
            }
        case API_CALL_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                loged: true,
                token: action.payload.token
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload.error,
                loged: false,
                token: null
            }

        default:
            return state;
    }
}