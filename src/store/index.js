import { applyMiddleware, legacy_createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './Register/reducer';
import userSaga from './Register/saga';
const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;