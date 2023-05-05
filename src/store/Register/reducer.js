import {
    REGISTER_USER,
    REGISTER_USER_SUCCESSFUL,
    REGISTER_USER_FAILED,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from "./actionTypes";

const initialState = {
    users: [],
    errer: {},
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            state = {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
            break;
        case REGISTER_USER_SUCCESSFUL:
            state = {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
            break;
        case REGISTER_USER_FAILED:
            state = {
                ...state,
                user: null,
                loading: true,
                errer: action.payload,
            }
            break;
        case GET_USER_SUCCESS:
            state = {
                ...state,
                users: action.payload,

            }
        case GET_USER_FAIL:
            state = {
                ...state,
                errer: action.payload

            }
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default reducer;