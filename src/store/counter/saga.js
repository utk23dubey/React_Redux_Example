import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./action";
import axios from "axios";

const fetchEmployees = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      console.log("USER 1", response.data);
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
  try {
    const user = yield call(fetchEmployees);
    yield put({ type: actionTypes.employee_success, employee: user });
  } catch (e) {
    yield put({ type: actionTypes.employee_failure, error: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* counterSaga() {
  yield takeEvery(actionTypes.employee_requested, fetchUser);
}

export default counterSaga;
