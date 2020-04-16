import React from 'react';
import { Redirect } from 'react-router-dom';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { AuthorizationForm } from '../../components/index';

interface IOwnProps {
  onRedirectClick: () => void;
  restore: (object: {email: string}) => void;
  accountRedirect: () => string;
}

const mapDispatch = {
  restore: actionCreators.restore,
};

interface IStateProps {
  error: string | {code: string};
  user: string;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'restore').error,
    user: selectors.selectUser(state),
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class RestoreComponent extends React.Component<IProps> {
  public render() {
    const { onRedirectClick, error, accountRedirect, user } = this.props;
    let errorMessage: string = '';
    if (typeof error === 'object') {
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Адрес электронной почты плохо отформатирован';
      } else {
        errorMessage = 'Нет никакой записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален';
      }
    }

    if (user) {
      return <Redirect to={accountRedirect()} />;
    }

    return (
      <AuthorizationForm
        type="restore"
        onRedirectClick={onRedirectClick}
        errorMessage={errorMessage}
        onClick={this.handleRestore}
      />
    );
  }

  private handleRestore(email: string) {
    const { restore } = this.props;
    restore({ email });
  }
}

const Restore = connect(mapState, mapDispatch)(RestoreComponent);

export { Restore, RestoreComponent, IProps as IRestoreProps };
