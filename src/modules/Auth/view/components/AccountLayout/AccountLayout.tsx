import React from 'react';
import { History } from 'history';
import { autobind } from 'core-decorators';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

import { Layout } from '../../../../shared/Layout/Layout';
import { routes } from '../../../routes';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

class AccountLayoutComponent extends React.Component<IProps> {
  render() {
    const { authorizationFeatureEntry: { containers } } = this.props;
    const { Account } = containers;

    return (
      <Layout>
        <Account onLogOut={this.redirectToSignIn} />
      </Layout>
    );
  }

  @autobind
  redirectToSignIn() {
    const { history } = this.props;
    history.push(routes.auth.signIn.getRedirectPath());
  }
}

const AccountLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(AccountLayoutComponent);

export { AccountLayout, AccountLayoutComponent, IProps as IAccountLayoutProps };
