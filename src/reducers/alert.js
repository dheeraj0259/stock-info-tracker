import { Types } from "../actions/alert";

// create initial state for reducers
const INIT_STATE = {
  showAlert: false,
  message: "",
  type: "success"
};

const setAlertStatus = payload => {
  return {
    ...INIT_STATE,
    showAlert: !INIT_STATE.showAlert,
    message: payload.message,
    type: payload.type
  };
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.SET_ALERT_STATUS: {
      return setAlertStatus(action.payload);
    }
    default:
      return state;
  }
}
