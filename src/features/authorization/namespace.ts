import { ICommunication, IAction, IPlainFailAction, IPlainAction } from 'shared/types/redux';

export interface IReduxState {
  user: null | {};
  communication: {
    signInUser: ICommunication;
    signUpUser: ICommunication;
    signOutUser: ICommunication;
    resetPassword: ICommunication;
    restore: ICommunication;
  };
}

export type ISignIn = IAction<'AUTHORIZATION:SIGN_IN_USER', {email: string, password: string} >;
export type ISignInSuccess = IAction<'AUTHORIZATION:SIGN_IN_USER_SUCCESS', any>;
export type ISignInFail = IPlainFailAction<'AUTHORIZATION:SIGN_IN_USER_FAIL'>;

export type ISignOut = IPlainAction<'AUTHORIZATION:SIGN_OUT_USER'>;
export type ISignOutSuccess = IAction<'AUTHORIZATION:SIGN_OUT_USER_SUCCESS', any>;
export type ISignOutFail = IPlainFailAction<'AUTHORIZATION:SIGN_OUT_USER_FAIL'>;

export type ISignUp = IAction<'AUTHORIZATION:SIGN_UP_USER', {email: string, password: string} >;
export type ISignUpSuccess = IAction<'AUTHORIZATION:SIGN_UP_USER_SUCCESS', any>;
export type ISignUpFail = IPlainFailAction<'AUTHORIZATION:SIGN_UP_USER_FAIL'>;

export type IResetPassword = IAction<'AUTHORIZATION:RESET_PASSWORD', {password: string} >;
export type IResetPasswordSuccess = IAction<'AUTHORIZATION:RESET_PASSWORD_SUCCESS', any>;
export type IResetPasswordFail = IPlainFailAction<'AUTHORIZATION:RESET_PASSWORD_FAIL'>;

export type IRestore = IAction<'AUTHORIZATION:RESTORE', {email: string} >;
export type IRestoreSuccess = IAction<'AUTHORIZATION:RESTORE_SUCCESS', any>;
export type IRestoreFail = IPlainFailAction<'AUTHORIZATION:RESTORE_FAIL'>;

export type IAction =
  | ISignIn
  | ISignInSuccess
  | ISignInFail
  | ISignOut
  | ISignOutSuccess
  | ISignOutFail
  | ISignUp
  | ISignUpSuccess
  | ISignUpFail
  | IResetPassword
  | IResetPasswordSuccess
  | IResetPasswordFail
  | IRestore
  | IRestoreSuccess
  | IRestoreFail;
