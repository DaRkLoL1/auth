import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { AuthorizationForm } from '../../components/index';

interface IOwnProps {
  path: () => void;
  restorePath: () => void;
  signInUser: (object: {email: string, password: string}) => void;
}

const mapDispatch = {
  signInUser: actionCreators.signInUser,
};

interface IStateProps {
  error: string | {code: string};
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'signInUser').error,
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class SignInComponent extends React.Component<IProps> {
  public render() {
    const { path, restorePath, error } = this.props;

    let errorMessage: string = '';
    if (typeof error === 'object') {
      if (error.code === 'auth/wrong-password') {
        errorMessage = 'Пароль недействителен или у пользователя нет пароля';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'Нет никакой записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален';
      }
    }

    return (
      <AuthorizationForm
        type="signIn"
        path={path}
        errorMessage={errorMessage}
        restorePath={restorePath}
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
