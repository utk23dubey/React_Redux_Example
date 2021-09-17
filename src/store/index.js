import { createSlice, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./counter/reducer";
import authenticateReducer from "./auth/reducer";
import employeeReducer from "./employee/reducer";
import createSagaMiddleware from "redux-saga";
import { all } from "@redux-saga/core/effects";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import employeeSaga from "./employee/saga";
import counterSaga from "./counter/saga";
const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

export function* sagas() {
  yield all([employeeSaga(), counterSaga()]);
}

const rootReducer = combineReducers({
  counter: counterReducer,
  authentication: authenticateReducer,
  employees: employeeReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;
