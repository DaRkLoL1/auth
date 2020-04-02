import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { AuthorizationForm } from '../../components/index';
import { actionCreators } from './../../../redux';

interface IProps {
  path: () => void;
  restorePath: () => void;
  signInUser: (object: {email: string, password: string}) => void;
}

const mapDispatch = {
  signInUser: actionCreators.signInUser,
};

@autobind
class SignInComponent extends React.Component<IProps> {
  public render() {
    const { path, restorePath } = this.props;
    return (
      <AuthorizationForm
        type="signIn"
        path={path}
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

const SignIn = connect(null, mapDispatch)(SignInComponent);

export { SignIn, SignInComponent, IProps as ISignInProps };
