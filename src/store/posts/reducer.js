import { GET_POST_SUCCESS, GET_POST_FAILURE, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } from './action';

export const INITIAL_STATE = {
  limit: 0,
  posts: [],
  skip: 0,
  total: 0,
  error: '',
  createPostError: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_SUCCESS:
      return { ...state, ...payload, posts: [...state.posts, ...payload.posts], error: '' };
    case GET_POST_FAILURE:
      return { ...state, error: payload.error };
    case CREATE_POST_SUCCESS:
      return { ...state, posts: [payload, ...state.posts], createPostError: false };
    case CREATE_POST_FAILURE:
      return { ...state, createPostError: payload.error };
    default:
      return state;
  }
};

export default reducer;
