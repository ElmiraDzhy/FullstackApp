import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/rootSaga";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

// const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = configureStore({
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware],
    reducer: rootReducer
});

sagaMiddleware.run(rootSaga);
export default store;