export const Types = {
  SET_ALERT_STATUS: "set_alert_status"
};

export const setAlertStatus = payload => ({
  type: Types.SET_ALERT_STATUS,
  payload
});
