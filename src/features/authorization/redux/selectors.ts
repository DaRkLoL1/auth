import { IAppReduxState } from 'shared/types/app';
import { ICommunication } from 'shared/types/redux';

import * as NS from '../namespace';

function selectFeatureState(state: IAppReduxState) {
  return state.authorization;
}

export function selectUser(state: IAppReduxState) {
  return selectFeatureState(state).auth.user;
}

export function selectMessage(state: IAppReduxState) {
  return selectFeatureState(state).auth.sendMessage;
}

export function selectCommunication(
  state: IAppReduxState, name: keyof NS.IReduxState['communication'],
): ICommunication {
  return selectFeatureState(state).communication[name];
}
