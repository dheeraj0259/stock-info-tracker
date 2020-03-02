// actions types is object with the
// key: GET_DATA_REQUEST -> value: describes the action
export const Types = {
  GET_USERS_REQUEST: "get_users_request",
  GET_USERS_SUCCESS: "get_users_success",
  SET_USER_REQUEST: "set_user_request"
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
});

export const getUsers = ({ data }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: data
});

// TODO: Remove the below action
export const setUserRequest = payload => ({
  type: Types.SET_USER_REQUEST,
  payload
});
