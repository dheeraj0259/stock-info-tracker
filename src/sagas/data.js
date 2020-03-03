import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/user";
import * as api from "../api";

function* fetchUserData() {
  try {
    const { data } = yield call(api.user.getUserList);
    yield put(actions.getUsers({ data: data.data.Items }));
  } catch (e) {
    throw new Error(e);
  }
}

function* watchFetchUserData() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, fetchUserData);
}

const UserDataSagas = [fork(watchFetchUserData)];

export default UserDataSagas;
