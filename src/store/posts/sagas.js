import { put, takeLatest, call } from 'redux-saga/effects';
import { getPostsApi, createPostApi } from '../../api/index';
import {
  CREATE_POST_ACTION,
  GET_POST_ACTION,
  createPostFailureAction,
  createPostSuccessAction,
  getPostFailureAction,
  getPostSuccessAction,
} from './action';

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

export function* createPostSaga(action) {
  try {
    // api call from saga
    const response = yield call(createPostApi, action.payload);
    console.log('createPostSaga response', response);

    yield put(createPostSuccessAction(response));
  } catch (error) {
    // fire an action from saga
    yield put(createPostFailureAction({ error: error.message }));
  }
}

export default [takeLatest(GET_POST_ACTION, getPostSaga), takeLatest(CREATE_POST_ACTION, createPostSaga)];
