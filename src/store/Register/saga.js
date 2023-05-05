import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers, getUsersFail, getUsersSuccess, registerUser, registerUserFailed, registerUserSuccessful } from "./action";
import { GET_USER, REGISTER_USER } from "./actionTypes";


function* fetchUser() {
    try {
        const reponse = yield call(getUsers)
        yield put(getUsersSuccess(reponse));
    } catch (error) {
        yield put(getUsersFail(error))
    }
}

function* postUser() {
    try {
        const response = yield call(registerUser);
        yield call(registerUserSuccessful(response));
    } catch (error) {
        yield call(registerUserFailed(error))
    }
}

function* userSaga() {
    yield takeEvery(GET_USER, fetchUser)
    yield takeEvery(REGISTER_USER, postUser)
}

export default userSaga;