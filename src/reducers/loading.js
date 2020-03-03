import { Types } from "../actions/loading";

// create initial state for reducers
const INIT_STATE = {
  loading: false
};

const setLoadingStatus = () => {
  return {
    ...INIT_STATE,
    loading: !INIT_STATE.loading
  };
};

// reducer function to transform state
export default function data(state = INIT_STATE, action) {
  switch (action.type) {
    case Types.SET_LOADING_STATUS: {
      return setLoadingStatus();
    }
    default:
      return state;
  }
}
