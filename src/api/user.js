import axios from "axios";

import { getUsersRequest } from "../actions/user";
import { setAlertStatus } from "../actions/alert";
import { setLoadingStatus } from "../actions/loading";

export const getUserList = () => {
  return axios.get(
    "https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo"
  );
};

export const setUserInformation = (userDetails, dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    axios
      .post(
        "https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo",
        userDetails
      )
      .then(res => {
        dispatch(setLoadingStatus(false));
        dispatch(
          setAlertStatus({
            status: true,
            message: res.data.message,
            type: "success"
          })
        );
        setTimeout(() => dispatch(setAlertStatus({})), 5000);
      })
      .then(() => dispatch(getUsersRequest()));
  } catch (e) {
    dispatch(
      setAlertStatus({
        status: true,
        message: "Sorry something went wrong. Please refresh and try again.",
        type: "error"
      })
    );
  }
};

export const logIn = (userDetails, dispatch) => {
  try {
    const { email, password } = userDetails;
    dispatch(setLoadingStatus(true));
    axios
      .get(
        `https://g6crplts3e.execute-api.us-east-2.amazonaws.com/local/userInfo/${email}`
      )
      .then(res => {
        dispatch(setLoadingStatus(false));
        if (!res.data.data.Item) {
          dispatch(
            setAlertStatus({
              status: true,
              message: res.data.message,
              type: "warning"
            })
          );
        } else if (res.data.data.Item.password !== password) {
          dispatch(
            setAlertStatus({
              status: true,
              message: `Incorrect password for the account ${email}`,
              type: "warning"
            })
          );
        } else {
          dispatch(
            setAlertStatus({
              status: true,
              message: res.data.message,
              type: "success"
            })
          );
          setTimeout(() => dispatch(setAlertStatus({})), 5000);
        }
      });
  } catch (e) {
    dispatch(
      setAlertStatus({
        status: true,
        message: "Sorry something went wrong. Please refresh and try again.",
        type: "error"
      })
    );
  }
};
