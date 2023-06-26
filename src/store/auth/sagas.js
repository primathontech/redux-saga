import { put, takeLatest, call } from 'redux-saga/effects';
import { loginApi, signupApi } from '../../api/index';
import {
  LOG_IN_ACTION,
  logInSuccessAction,
  logInFailureAction,
  SIGN_UP_ACTION,
  signUpFailureAction,
  signUpSuccessAction,
} from './action';

export function* logInSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    const { id, email, gender, firstName, lastName, image, token, message } = response;
    if (message) {
      yield put(logInFailureAction(response.message));
    } else {
      yield put(
        logInSuccessAction({
          token,
          user: {
            id,
            email,
            gender,
            image,
            firstName,
            lastName,
            username: payload.username,
          },
        })
      );
    }
  } catch (error) {
    yield put(logInFailureAction(error));
  }
}

export function* signUpSaga({ payload }) {
  try {
    const response = yield call(signupApi, payload);
    const { id, image, token, message } = response;
    if (message) {
      yield put(signUpFailureAction(response.message));
    } else {
      yield put(
        signUpSuccessAction({
          token,
          user: {
            id,
            image,
            email: payload.email,
            gender: payload.gender,
            username: payload.username,
            firstName: payload.firstName,
            lastName: payload.lastName,
          },
        })
      );
    }
  } catch (error) {
    yield put(signUpFailureAction(error));
  }
}

export default [takeLatest(LOG_IN_ACTION, logInSaga), takeLatest(SIGN_UP_ACTION, signUpSaga)];
