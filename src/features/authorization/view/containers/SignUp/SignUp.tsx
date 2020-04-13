import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { AuthorizationForm } from '../../components/index';


interface IOwnProps {
  path: () => void;
  signUpUser: (object: {email: string, password: string}) => void;
}

const mapDispatch = {
  signUpUser: actionCreators.signUpUser,
};

interface IStateProps {
  error: string | {};
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'signUpUser').error,
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class SignUpComponent extends React.Component<IProps> {
  public render() {
    const { path, error } = this.props;
    let errorMessage: string = '';
    if (typeof error === 'object') {
      errorMessage = 'Этот email адрес уже используется на другом аккаунте';
    }

    return (
      <AuthorizationForm
        type="signUp"
        path={path}
        errorMessage={errorMessage}
        onClick={this.handleSignUp}
      />
    );
  }

  private handleSignUp(email: string, password: string) {
    const { signUpUser } = this.props;
    signUpUser({ email, password });
  }
}

const SignUp = connect(mapState, mapDispatch)(SignUpComponent);

export { SignUp, SignUpComponent, IProps as ISignUpProps };
