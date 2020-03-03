import { combineReducers } from "redux";
import UserReducer from "./user";
import AlertReducer from "./alert";

export default combineReducers({
  user: UserReducer,
  alert: AlertReducer
});
