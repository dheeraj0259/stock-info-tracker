import { Types } from "../actions/user";

// create initial state for reducers
const INIT_STATE = {
  users: [],
  userAccess: false
};

const getUsers = payload => {
  return {
    ...INIT_STATE,
    users: payload
  };
};

const setUserAccess = payload => {
  return {
    ...INIT_STATE,
    userAccess: payload
  };
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return getUsers(action.payload);
    }
    case Types.SET_USER_ACCESS: {
      return setUserAccess(action.payload);
    }
    default:
      return state;
  }
}
