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

const UserDataSagas = [fork(watchFetchUserData)];

export default UserDataSagas;
