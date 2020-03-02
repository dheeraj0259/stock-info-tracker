import { Types } from "../actions/data";
import { user } from "../api";

// create initial state for reducers
const INIT_STATE = {
  users: []
};

const getUsers = payload => {
  return {
    ...INIT_STATE,
    users: payload
  };
};

const setUsers = userDetails => {
  user.setUserInformation(userDetails);
  return INIT_STATE;
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return getUsers(action.payload);
    }
    case Types.SET_USER_REQUEST: {
      return setUsers(action.payload);
    }
    default:
      return state;
  }
}
