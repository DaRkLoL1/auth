import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';

import { IAppReduxState } from 'shared/types/app';

import { actionCreators, selectors } from './../../../redux';
import { RestoreForm } from '../../components/index';

interface IOwnProps {
  restore: (object: {email: string}) => void;
  clearMessage: () => void;
}

const mapDispatch = {
  restore: actionCreators.restore,
  clearMessage: actionCreators.clearMessage,
};

interface IStateProps {
  error: string | {code: string};
  sendMessage: boolean;
}

function mapState(state: IAppReduxState): IStateProps {
  return {
    error: selectors.selectCommunication(state, 'restore').error,
    sendMessage: selectors.selectMessage(state),
  };
}

type IProps = IOwnProps & IStateProps;

@autobind
class RestoreComponent extends React.Component<IProps> {
  private timeId: NodeJS.Timeout | undefined;

  componentDidUpdate() {
    const { sendMessage, clearMessage } = this.props;

    if (sendMessage) {
      this.timeId = setTimeout(clearMessage, 5000);
    }
  }

  componentWillUnmount() {
    if (this.timeId) clearTimeout(this.timeId);
  }

  public render() {
    const { error, sendMessage } = this.props;
    let errorMessage: string = '';

    if (typeof error === 'object') {
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Адрес электронной почты плохо отформатирован';
      } else {
        errorMessage = 'Нет никакой записи пользователя, соответствующей этому идентификатору. Возможно, пользователь был удален';
      }
    }

    let message: string = '';

    if (sendMessage) {
      message = 'Письмо было отправлено';
    }

    return (
      <RestoreForm
        errorMessage={errorMessage}
        message={message}
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
