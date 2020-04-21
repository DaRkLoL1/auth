import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { AccountForm } from '../../components/index';

function mapState(state: IAppReduxState) {
  return {
    user: selectors.selectUser(state),
  };
}

interface IProps {
  user: string;
  signOutUser: () => void;
  resetPassword: (object: {password: string}) => void;
  onLogOut: () => void;
}

const mapDispatch = {
  signOutUser: actionCreators.signOutUser,
  resetPassword: actionCreators.resetPassword,
};

@autobind
class AccountComponent extends React.Component<IProps> {
  componentDidMount() {
    const { user, onLogOut } = this.props;

    if (!user) {
      onLogOut();
    }
  }

  componentDidUpdate() {
    const { user, onLogOut } = this.props;

    if (!user) {
      onLogOut();
    }
  }

  public render() {
    const { user } = this.props;
    return (
      <AccountForm
        user={user}
        handleSignOut={this.handleSignOut}
        handleResetPassword={this.handleResetPassword}
      />
    );
  }

  private handleSignOut() {
    const { signOutUser } = this.props;
    signOutUser();
  }

  private handleResetPassword(password: string) {
    const { resetPassword } = this.props;
    resetPassword({ password });
  }
}

const Account = connect(mapState, mapDispatch)(AccountComponent);

export { Account, AccountComponent, IProps as IAccountProps };
