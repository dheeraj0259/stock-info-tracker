import axios from "axios";

import { getUsersRequest } from "../actions/user";
import { setAlertStatus } from "../actions/alert";

export const getUserList = () => {
  return axios.get(
    "https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo"
  );
};

export const setUserInformation = (userDetails, dispatch) => {
  try {
    axios
      .post(
        "https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo",
        userDetails
      )
      .then(res => {
        dispatch(
          setAlertStatus({
            message: res.data.message,
            type: "success"
          })
        );
      })
      .then(() => dispatch(getUsersRequest()));
  } catch (e) {
    dispatch(
      setAlertStatus({
        message: "Sorry something went wrong. Please refresh and try again.",
        type: "error"
      })
    );
  }
};
