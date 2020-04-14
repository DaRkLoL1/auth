import * as NS from '../../namespace';
import { initial } from '../initial';

function authorizationReducer(state: NS.IReduxState['user'] = initial.user, action: NS.IAction): NS.IReduxState['user'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_IN_USER_SUCCESS': {
      return action.payload;
    }
    case 'AUTHORIZATION:SIGN_OUT_USER_SUCCESS': {
      return '';
    }
    case 'AUTHORIZATION:SIGN_UP_USER_SUCCESS': {
      return action.payload;
    }
    default:
      return state;
  }
}

export { authorizationReducer };
