import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { SignInForm } from '../../components/index';

interface IOwnProps {
  signInUser: (object: {email: string, password: string}) => void;
  onSuccessSignIn: () => void;
  setUser: (user: string) => void;
  clearUser: () => void;
  stateChanged: (object: {setUser: (user: string) => void, clearUser: () => void}) => void;
}

const mapDispatch = {
  signInUser: actionCreators.signInUser,
  stateChanged: actionCreators.stateChanged,
  setUser: actionCreators.setUser,
  clearUser: actionCreators.clearUser,
};

interface IStateProps {
  error: string | {code: string};
  user: string;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'signInUser').error,
    user: selectors.selectUser(state),
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class SignInComponent extends React.Component<IProps> {
  componentDidMount() {
    const { setUser, clearUser, stateChanged, user, onSuccessSignIn } = this.props;
    stateChanged({ setUser, clearUser });

    if (user) {
      onSuccessSignIn();
    }
  }

  componentDidUpdate() {
    const { user, onSuccessSignIn } = this.props;

    if (user) {
      onSuccessSignIn();
    }
  }

  public render() {
    const { error } = this.props;

    let errorMessage: string = '';
    if (typeof error === 'object') {
      if (error.code === 'auth/wrong-password') {
        errorMessage = 'Пароль недействителен или у пользователя нет пароля';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'Нет никакой записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален';
      } else {
        errorMessage = 'Адрес электронной почты плохо отформатирован';
      }
    }

    return (
      <SignInForm
        errorMessage={errorMessage}
        onClick={this.handleSignIn}
      />
    );
  }

  private handleSignIn(email: string, password: string) {
    const { signInUser } = this.props;
    signInUser({ email, password });
  }
}

const SignIn = connect(mapState, mapDispatch)(SignInComponent);

export { SignIn, SignInComponent, IProps as ISignInProps };
