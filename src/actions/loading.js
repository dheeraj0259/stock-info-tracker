export const Types = {
  SET_LOADING_STATUS: "set_loading_status"
};

export const setLoadingStatus = payload => ({
  type: Types.SET_LOADING_STATUS,
  payload
});
