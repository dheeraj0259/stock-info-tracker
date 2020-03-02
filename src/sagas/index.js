import { all } from "redux-saga/effects";
import UserDataSagas from "./data";

// combine all sagas
export default function* rootSaga() {
  yield all([...UserDataSagas]);
}
