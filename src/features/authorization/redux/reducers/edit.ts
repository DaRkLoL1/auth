import * as NS from '../../namespace';
import { initial } from '../initial';

function authorizationReducer(state: NS.IReduxState['auth'] = initial.auth, action: NS.IAction): NS.IReduxState['auth'] {
  switch (action.type) {
    case 'AUTHORIZATION:SIGN_IN_USER_SUCCESS': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'AUTHORIZATION:SIGN_OUT_USER_SUCCESS': {
      return {
        ...state,
        user: '',
      };
    }
    case 'AUTHORIZATION:SIGN_UP_USER_SUCCESS': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'AUTHORIZATION:SET_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'AUTHORIZATION:CLEAR_USER': {
      return {
        ...state,
        user: '',
      };
    }
    case 'AUTHORIZATION:RESTORE_SUCCESS': {
      return {
        ...state,
        sendMessage: true,
      };
    }
    case 'AUTHORIZATION:CLEAR_MESSAGE': {
      return {
        ...state,
        sendMessage: false,
      };
    }
    default:
      return state;
  }
}

export { authorizationReducer };
