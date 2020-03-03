import axios from "axios";

import { getUsersRequest } from "../actions/user";
import { setAlertStatus } from "../actions/alert";
import { getAlertType } from "../util/common";

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
        console.log(">>>>>>", res);
        dispatch(
          setAlertStatus({
            status: true,
            message: res.data.message,
            type: getAlertType(res.status)
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
