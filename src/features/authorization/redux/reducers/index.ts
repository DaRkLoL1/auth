import { combineReducers } from 'redux';

import { communicationReducer } from './communication';
import { authorizationReducer } from './edit';
import * as NS from '../../namespace';

export const reducer = combineReducers<NS.IReduxState>({
  auth: authorizationReducer,
  communication: communicationReducer,
});
