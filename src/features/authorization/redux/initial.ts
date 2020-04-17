import { initialCommunicationField } from 'shared/constants';

import { IReduxState } from '../namespace';

const initial: IReduxState = {
  auth: {
    user: '',
    sendMessage: false,
  },
  communication: {
    signInUser: initialCommunicationField,
    signUpUser: initialCommunicationField,
    signOutUser: initialCommunicationField,
    resetPassword: initialCommunicationField,
    restore: initialCommunicationField,
    stateChanged: initialCommunicationField,
  },
};

export { initial };
