import { IAppReduxState } from 'shared/types/app';

function selectFeatureState(state: IAppReduxState) {
  return state.authorization;
}

export function selectProfile(state: IAppReduxState) {
  return selectFeatureState(state).user;
}
