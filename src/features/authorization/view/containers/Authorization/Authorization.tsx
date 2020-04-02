import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { IAppReduxState } from 'shared/types/app';

import { Account, AuthorizationForm } from '../../components/index';
import { actionCreators, selectors } from './../../../redux';

function mapState(state: IAppReduxState) {
  return {
    user: selectors.selectProfile(state),
  };
}

interface IProps {
  user: null | {email: string};
  type: string;
  path?: string;
  restorePath?: string;
  signInUser: (object: {email: string, password: string}) => void;
  signOutUser: () => void;
  signUpUser: (object: {email: string, password: string}) => void;
  resetPassword: (object: {password: string}) => void;
  restore: (object: {email: string}) => void;
}

const mapDispatch = {
  signInUser: actionCreators.signInUser,
  signOutUser: actionCreators.signOutUser,
  signUpUser: actionCreators.signUpUser,
  resetPassword: actionCreators.resetPassword,
  restore: actionCreators.restore,
};

@autobind
class AuthorizationComponent extends React.Component<IProps> {
  public render() {
    const { user, type, path, restorePath } = this.props;

    let component;
    if (type === 'account') {
      component = (
        <Account
          user={user}
          handleSignOut={this.handleSignOut}
          handleResetPassword={this.handleResetPassword}
        />
      );
    } else if (type === 'signIn' && restorePath && path) {
      component = (
        <AuthorizationForm
          type={type}
          path={path}
          restorePath={restorePath}
          onClick={this.handleSignIn}
        />
      );
    } else if (type === 'signUp' && path) {
      component = (
        <AuthorizationForm
          type={type}
          path={path}
          onClick={this.handleSignUp}
        />
      );
    } else if (type === 'restore' && path) {
      component = (
        <AuthorizationForm
          type={type}
          path={path}
          onClick={this.handleRestore}
        />
      );
    }
    return (
      <>
        { component }
      </>
    );
  }

  private handleSignOut() {
    const { signOutUser } = this.props;
    signOutUser();
  }

  private handleSignIn(email: string, password: string) {
    const { signInUser } = this.props;
    signInUser({ email, password });
  }

  private handleSignUp(email: string, password: string) {
    const { signUpUser } = this.props;
    signUpUser({ email, password });
  }

  private handleResetPassword(password: string) {
    const { resetPassword } = this.props;
    resetPassword({ password });
  }

  private handleRestore(email: string) {
    const { restore } = this.props;
    restore({ email });
  }
}

const Authorization = connect(mapState, mapDispatch)(AuthorizationComponent);

export { Authorization, AuthorizationComponent, IProps as IAuthorizationProps };
