export const Types = {
  GET_USERS_REQUEST: "get_users_request",
  GET_USERS_SUCCESS: "get_users_success",
  SET_USER_ACCESS: "set_user_access"
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
});

export const getUsers = ({ data }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: data
});

export const setUserAccess = payload => ({
  type: Types.SET_USER_ACCESS,
  payload
});
