import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { SignUpForm } from '../../components/index';


interface IOwnProps {
  signUpUser: (object: {email: string, password: string}) => void;
  onSuccessSignUp: () => void;
}

const mapDispatch = {
  signUpUser: actionCreators.signUpUser,
};

interface IStateProps {
  error: string | {code: string};
  user: string;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'signUpUser').error,
    user: selectors.selectUser(state),
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class SignUpComponent extends React.Component<IProps> {
  componentDidMount() {
    const { user, onSuccessSignUp } = this.props;

    if (user) {
      onSuccessSignUp();
    }
  }

  componentDidUpdate() {
    const { user, onSuccessSignUp } = this.props;

    if (user) {
      onSuccessSignUp();
    }
  }

  public render() {
    const { error } = this.props;
    let errorMessage: string = '';

    if (typeof error === 'object') {
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Адрес электронной почты плохо отформатирован';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Этот email адрес уже используется на другом аккаунте';
      }
    }

    return (
      <SignUpForm
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
