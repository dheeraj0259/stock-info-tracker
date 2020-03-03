import axios from "axios";

import { getUsersRequest } from "../actions/data";

// data api calls
export const getUserList = () => {
  return axios.get(
    "https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo"
  );
};

export const setUserInformation = (userDetails, dispatch) => {
  axios
    .post(
      "https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo",
      userDetails
    )
    .then(() => dispatch(getUsersRequest()));
};
