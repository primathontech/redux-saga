import { put, takeLatest, call } from 'redux-saga/effects';
import { getPostsApi } from '../../api/index';
import { GET_POST_ACTION, getPostFailureAction, getPostSuccessAction } from './action';

export function* getPostSaga() {
  try {
    // api call from saga
    const response = yield call(getPostsApi);
    console.log('getPostSaga response', response);

    yield put(getPostSuccessAction(response));
  } catch (error) {
    // fire an action from saga
    yield put(getPostFailureAction({ error: error.message }));
  }
}

export default [takeLatest(GET_POST_ACTION, getPostSaga)];
