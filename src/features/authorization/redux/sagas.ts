import { SagaIterator } from 'redux-saga';
import { put, call, takeLatest } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';

import * as NS from '../namespace';
import * as actionCreators from './actionCreators';

interface IResponse {
  user: {email: string}
}

function getSaga(deps: IDependencies) {
  const signInUserType: NS.ISignIn['type'] = 'AUTHORIZATION:SIGN_IN_USER';
  const signOutUserType: NS.ISignOut['type'] = 'AUTHORIZATION:SIGN_OUT_USER';
  const signUpUserType: NS.ISignUp['type'] = 'AUTHORIZATION:SIGN_UP_USER';
  const resetPasswordType: NS.IResetPassword['type'] = 'AUTHORIZATION:RESET_PASSWORD';
  const restoreType: NS.IRestore['type'] = 'AUTHORIZATION:RESTORE';

  return function* saga(): SagaIterator {
    yield takeLatest(signInUserType, executeSignInUser, deps);
    yield takeLatest(signOutUserType, executeSignOutUser, deps);
    yield takeLatest(signUpUserType, executeSignUpUser, deps);
    yield takeLatest(resetPasswordType, executeResetPassword, deps);
    yield takeLatest(restoreType, executeRestore, deps);
  };
}


function* executeSignInUser({ api }: IDependencies, { payload }: NS.ISignIn) {
  try {
    const { email, password } = payload;
    const response: IResponse = yield call(api.signInUser, email, password);
    const { user } = response;
    yield put(actionCreators.signInUserSuccess(user.email));
  } catch (error) {
    yield put(actionCreators.signInUserFail(error));
  }
}

function* executeSignOutUser({ api }: IDependencies) {
  try {
    yield call(api.signOutUser);
    yield put(actionCreators.signOutUserSuccess());
  } catch (error) {
    yield put(actionCreators.signOutUserFail(error));
  }
}

function* executeSignUpUser({ api }: IDependencies, { payload }: NS.ISignIn) {
  try {
    const { email, password } = payload;
    const response: IResponse = yield call(api.signInUser, email, password);
    const { user } = response;
    yield put(actionCreators.signUpUserSuccess(user.email));
  } catch (error) {
    yield put(actionCreators.signUpUserFail(error));
  }
}

function* executeResetPassword({ api }: IDependencies, { payload }: NS.ISignIn) {
  try {
    const { password } = payload;
    yield call(api.resetPassword, password);
    yield put(actionCreators.resetPasswordSuccess());
  } catch (error) {
    yield put(actionCreators.resetPasswordFail(error));
  }
}

function* executeRestore({ api }: IDependencies, { payload }: NS.IRestore) {
  try {
    const { email } = payload;
    yield call(api.restore, email);
    yield put(actionCreators.restoreSuccess());
  } catch (error) {
    yield put(actionCreators.restoreFail(error));
  }
}

export { getSaga };
