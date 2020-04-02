import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';


import { AuthorizationForm } from '../../components/index';
import { actionCreators } from './../../../redux';

interface IProps {
  path: () => void;
  restore: (object: {email: string}) => void;
}

const mapDispatch = {
  restore: actionCreators.restore,
};

@autobind
class RestoreComponent extends React.Component<IProps> {
  public render() {
    const { path } = this.props;

    return (
      <AuthorizationForm
        type="restore"
        path={path}
        onClick={this.handleRestore}
      />
    );
  }

  private handleRestore(email: string) {
    const { restore } = this.props;
    restore({ email });
  }
}

const Restore = connect(null, mapDispatch)(RestoreComponent);

export { Restore, RestoreComponent, IProps as IRestoreProps };
