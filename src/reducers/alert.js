import { Types } from "../actions/alert";

// create initial state for reducers
const INIT_STATE = {
  showAlert: false,
  message: "",
  type: "success"
};

const setAlertStatus = ({ status = false, message = "", type = "success" }) => {
  return {
    ...INIT_STATE,
    showAlert: status,
    message,
    type
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
