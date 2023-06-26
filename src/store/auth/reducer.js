import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_FAILURE, LOG_IN_SUCCESS, LOG_OUT_ACTION } from './action';

export const INITIAL_STATE = {
  token: null,
  verified: false,
  user: {},
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case SIGN_UP_FAILURE:
      return { ...INITIAL_STATE, verified: false };
    case LOG_IN_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    case LOG_IN_FAILURE:
      return { ...INITIAL_STATE, verified: false };
    case LOG_OUT_ACTION:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
