import { combineReducers } from 'redux';

import { authorizationReducer } from './edit';
import * as NS from '../../namespace';

export const reducer = combineReducers<NS.IReduxState>({
  user: authorizationReducer,
});