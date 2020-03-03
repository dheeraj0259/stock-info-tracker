import { Types } from "../actions/loading";

// create initial state for reducers
const INIT_STATE = {
  loading: false
};

const setLoadingStatus = status => {
  return {
    ...INIT_STATE,
    loading: status
  };
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.SET_LOADING_STATUS: {
      return setLoadingStatus(action.payload);
    }
    default:
      return state;
  }
}
