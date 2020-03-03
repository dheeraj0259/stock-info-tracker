import { combineReducers } from "redux";
import DataReducer from "./user";

export default combineReducers({
  data: DataReducer
});
