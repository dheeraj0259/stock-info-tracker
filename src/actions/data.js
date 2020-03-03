export const Types = {
  GET_USERS_REQUEST: "get_users_request",
  GET_USERS_SUCCESS: "get_users_success"
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
});

export const getUsers = ({ data }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: data
});
