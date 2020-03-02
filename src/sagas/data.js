import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/data";
import * as api from "../api";

function* fetchUserData() {
  try {
    const { data } = yield call(api.user.getUserList);
    yield put(actions.getUsers({ data: data.data.Items }));
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchUserData() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, fetchUserData);
}

export function* postUserData(userDetails) {
  console.log("Inside the post saga");
  try {
    // post user information
    console.log("Inside the post saga");
    const response = yield call(api.user.setUserInformation(userDetails));
    console.log("post response", response);
    // get user information
    yield put(actions.getUsersRequest);
  } catch (e) {
    console.log(e);
  }
}

const UserDataSagas = [fork(watchFetchUserData)];

export default UserDataSagas;
