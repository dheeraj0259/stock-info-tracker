import { combineReducers } from "redux";
import UserReducer from "./user";
import AlertReducer from "./alert";
import LoadingReducer from "./loading";

export default combineReducers({
  user: UserReducer,
  alert: AlertReducer,
  loading: LoadingReducer
});
