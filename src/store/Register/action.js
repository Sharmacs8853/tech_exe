import {
    REGISTER_USER,
    REGISTER_USER_SUCCESSFUL,
    REGISTER_USER_FAILED,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from "./actionTypes";

export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: user 
    }
}

export const registerUserSuccessful = (user) => {
    return {
        type: REGISTER_USER_SUCCESSFUL,
        payload: user
    }
}

export const registerUserFailed = (user) => {
    return {
        type: REGISTER_USER_FAILED,
        payload: user
    }
}

export const getUsers = () => ({
    type: GET_USER,
})

export const getUsersSuccess = users => ({
    type: GET_USER_SUCCESS,
    payload: users,
})

export const getUsersFail = error => ({
    type: GET_USER_FAIL,
    payload: error,
})