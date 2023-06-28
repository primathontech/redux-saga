// Action Name Constants
export const GET_POST_ACTION = 'GET_POST_ACTION';
export const GET_POST_SUCCESS = `${GET_POST_ACTION}_SUCCESS`;
export const GET_POST_FAILURE = `${GET_POST_ACTION}_FAILURE`;

// Action Creators
export const getPostAction = () => ({
  type: GET_POST_ACTION,
});

export const getPostSuccessAction = (payload) => ({
  type: GET_POST_SUCCESS,
  payload: payload,
});

export const getPostFailureAction = (payload) => ({
  type: GET_POST_FAILURE,
  payload: payload,
});
