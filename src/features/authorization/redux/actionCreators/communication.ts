import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: signInUser,
  completed: signInUserSuccess,
  failed: signInUserFail,
} = makeCommunicationActionCreators<NS.ISignIn, NS.ISignInSuccess, NS.ISignInFail>(
  'AUTHORIZATION:SIGN_IN_USER',
  'AUTHORIZATION:SIGN_IN_USER_SUCCESS',
  'AUTHORIZATION:SIGN_IN_USER_FAIL',
);

export const {
  execute: signOutUser,
  completed: signOutUserSuccess,
  failed: signOutUserFail,
} = makeCommunicationActionCreators<NS.ISignOut, NS.ISignOutSuccess, NS.ISignOutFail>(
  'AUTHORIZATION:SIGN_OUT_USER',
  'AUTHORIZATION:SIGN_OUT_USER_SUCCESS',
  'AUTHORIZATION:SIGN_OUT_USER_FAIL',
);

export const {
  execute: signUpUser,
  completed: signUpUserSuccess,
  failed: signUpUserFail,
} = makeCommunicationActionCreators<NS.ISignUp, NS.ISignUpSuccess, NS.ISignUpFail>(
  'AUTHORIZATION:SIGN_UP_USER',
  'AUTHORIZATION:SIGN_UP_USER_SUCCESS',
  'AUTHORIZATION:SIGN_UP_USER_FAIL',
);

export const {
  execute: resetPassword,
  completed: resetPasswordSuccess,
  failed: resetPasswordFail,
} = makeCommunicationActionCreators<NS.IResetPassword,
NS.IResetPasswordSuccess, NS.IResetPasswordFail>(
  'AUTHORIZATION:RESET_PASSWORD',
  'AUTHORIZATION:RESET_PASSWORD_SUCCESS',
  'AUTHORIZATION:RESET_PASSWORD_FAIL',
);

export const {
  execute: restore,
  completed: restoreSuccess,
  failed: restoreFail,
} = makeCommunicationActionCreators<NS.IRestore,
NS.IRestoreSuccess, NS.IRestoreFail>(
  'AUTHORIZATION:RESTORE',
  'AUTHORIZATION:RESTORE_SUCCESS',
  'AUTHORIZATION:RESTORE_FAIL',
);
