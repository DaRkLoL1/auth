import { makeCommunicationReducer } from 'redux-make-communication';
import { combineReducers } from 'redux';

import * as NS from '../../namespace';
import { initial } from '../initial';

export const communicationReducer = combineReducers<NS.IReduxState['communication']>({
  signInUser: makeCommunicationReducer<
  NS.ISignIn,
  NS.ISignInSuccess,
  NS.ISignInFail
  >(
    'AUTHORIZATION:SIGN_IN_USER',
    'AUTHORIZATION:SIGN_IN_USER_SUCCESS',
    'AUTHORIZATION:SIGN_IN_USER_FAIL',
    initial.communication.signInUser,
  ),
  signUpUser: makeCommunicationReducer<
  NS.ISignUp,
  NS.ISignUpSuccess,
  NS.ISignUpFail
  >(
    'AUTHORIZATION:SIGN_UP_USER',
    'AUTHORIZATION:SIGN_UP_USER_SUCCESS',
    'AUTHORIZATION:SIGN_UP_USER_FAIL',
    initial.communication.signUpUser,
  ),
  signOutUser: makeCommunicationReducer<
  NS.ISignOut,
  NS.ISignOutSuccess,
  NS.ISignOutFail
  >(
    'AUTHORIZATION:SIGN_OUT_USER',
    'AUTHORIZATION:SIGN_OUT_USER_SUCCESS',
    'AUTHORIZATION:SIGN_OUT_USER_FAIL',
    initial.communication.signOutUser,
  ),
  resetPassword: makeCommunicationReducer<
  NS.IResetPassword,
  NS.IResetPasswordSuccess,
  NS.IResetPasswordFail
  >(
    'AUTHORIZATION:RESET_PASSWORD',
    'AUTHORIZATION:RESET_PASSWORD_SUCCESS',
    'AUTHORIZATION:RESET_PASSWORD_FAIL',
    initial.communication.resetPassword,
  ),
  restore: makeCommunicationReducer<
  NS.IRestore,
  NS.IRestoreSuccess,
  NS.IRestoreFail
  >(
    'AUTHORIZATION:RESTORE',
    'AUTHORIZATION:RESTORE_SUCCESS',
    'AUTHORIZATION:RESTORE_FAIL',
    initial.communication.restore,
  ),
  stateChanged: makeCommunicationReducer<
  NS.IStateChanged,
  NS.IStateChangedSuccess,
  NS.IStateChangedFail
  >(
    'AUTHORIZATION:STATE_CHANGED',
    'AUTHORIZATION:STATE_CHANGED_SUCCESS',
    'AUTHORIZATION:STATE_CHANGED_FAIL',
    initial.communication.stateChanged,
  ),
});
