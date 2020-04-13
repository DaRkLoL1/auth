import { initialCommunicationField } from 'shared/constants';

import { IReduxState } from '../namespace';

const initial: IReduxState = {
  user: null,

  communication: {
    signInUser: initialCommunicationField,
    signUpUser: initialCommunicationField,
    signOutUser: initialCommunicationField,
    resetPassword: initialCommunicationField,
    restore: initialCommunicationField,
  },
};

export { initial };
