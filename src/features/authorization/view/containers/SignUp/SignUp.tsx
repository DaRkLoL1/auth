import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { AuthorizationForm } from '../../components/index';
import { actionCreators } from './../../../redux';

interface IProps {
  path: () => void;
  signUpUser: (object: {email: string, password: string}) => void;
}

const mapDispatch = {
  signUpUser: actionCreators.signUpUser,
};

@autobind
class SignUpComponent extends React.Component<IProps> {
  public render() {
    const { path } = this.props;
    return (
      <AuthorizationForm
        type="signUp"
        path={path}
        onClick={this.handleSignUp}
      />
    );
  }

  private handleSignUp(email: string, password: string) {
    const { signUpUser } = this.props;
    signUpUser({ email, password });
  }
}

const SignUp = connect(null, mapDispatch)(SignUpComponent);

export { SignUp, SignUpComponent, IProps as ISignUpProps };
