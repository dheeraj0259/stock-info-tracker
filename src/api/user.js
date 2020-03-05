import axios from "axios";

import { getUsersRequest, setUserAccess } from "../actions/user";
import { setAlertStatus } from "../actions/alert";
import { setLoadingStatus } from "../actions/loading";
import { baseApiUrl } from "../constants";

export const getUserList = () => {
  return axios.get(`${baseApiUrl}/userInfo`);
};

export const setUserInformation = (userDetails, dispatch) => {
  try {
    dispatch(setLoadingStatus(true));
    axios
      .post(`${baseApiUrl}/userInfo`, userDetails)
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

    axios.get(`${baseApiUrl}/userInfo/${email}`).then(res => {
      let { message } = res.data;
      let type = "success";

      if (!res.data.data.Item) {
        type = "warning";
      } else if (res.data.data.Item.password !== password) {
        type = "warning";
        message = `Incorrect password for the account ${email}`;
      }

      dispatch(setLoadingStatus(false));
      dispatch(
        setAlertStatus({
          status: true,
          message,
          type
        })
      );
      if (type === "success") {
        dispatch(setUserAccess(true));
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
