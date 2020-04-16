import { ICommunication, IAction, IPlainFailAction, IPlainAction } from 'shared/types/redux';

export interface IReduxState {
  user: string;
  communication: {
    signInUser: ICommunication;
    signUpUser: ICommunication;
    signOutUser: ICommunication;
    resetPassword: ICommunication;
    restore: ICommunication;
    stateChanged: ICommunication;
  };
}

export type ISetUser = IAction<'AUTHORIZATION:SET_USER', string>;
export type IClearUser = IPlainAction<'AUTHORIZATION:CLEAR_USER'>;

export type IStateChanged = IAction<'AUTHORIZATION:STATE_CHANGED', {setUser: (user: string) => void, clearUser: () => void}>;
export type IStateChangedSuccess = IAction<'AUTHORIZATION:STATE_CHANGED_SUCCESS', void>;
export type IStateChangedFail = IPlainFailAction<'AUTHORIZATION:STATE_CHANGED_FAIL'>;

export type ISignIn = IAction<'AUTHORIZATION:SIGN_IN_USER', {email: string, password: string}>;
export type ISignInSuccess = IAction<'AUTHORIZATION:SIGN_IN_USER_SUCCESS', string>;
export type ISignInFail = IPlainFailAction<'AUTHORIZATION:SIGN_IN_USER_FAIL'>;

export type ISignOut = IPlainAction<'AUTHORIZATION:SIGN_OUT_USER'>;
export type ISignOutSuccess = IAction<'AUTHORIZATION:SIGN_OUT_USER_SUCCESS', void>;
export type ISignOutFail = IPlainFailAction<'AUTHORIZATION:SIGN_OUT_USER_FAIL'>;

export type ISignUp = IAction<'AUTHORIZATION:SIGN_UP_USER', {email: string, password: string}>;
export type ISignUpSuccess = IAction<'AUTHORIZATION:SIGN_UP_USER_SUCCESS', string>;
export type ISignUpFail = IPlainFailAction<'AUTHORIZATION:SIGN_UP_USER_FAIL'>;

export type IResetPassword = IAction<'AUTHORIZATION:RESET_PASSWORD', {password: string}>;
export type IResetPasswordSuccess = IAction<'AUTHORIZATION:RESET_PASSWORD_SUCCESS', void>;
export type IResetPasswordFail = IPlainFailAction<'AUTHORIZATION:RESET_PASSWORD_FAIL'>;

export type IRestore = IAction<'AUTHORIZATION:RESTORE', {email: string} >;
export type IRestoreSuccess = IAction<'AUTHORIZATION:RESTORE_SUCCESS', void>;
export type IRestoreFail = IPlainFailAction<'AUTHORIZATION:RESTORE_FAIL'>;

export type IAction =
  | ISetUser
  | IClearUser
  | ISignIn
  | IStateChanged
  | IStateChangedSuccess
  | IStateChangedFail
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
