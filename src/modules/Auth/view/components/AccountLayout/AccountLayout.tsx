import React from 'react';
import { History } from 'history';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

import { Layout } from '../../../../shared/Layout/Layout';
import { routes } from '../../../routes';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

function AccountLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Account } = containers;
  return (
    <Layout>
      <Account onLogOut={redirectToSignIn} />
    </Layout>
  );

  function redirectToSignIn() {
    const { history } = props;
    history.push(routes.auth.signIn.getRedirectPath());
  }
}

const AccountLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(AccountLayoutComponent);

export { AccountLayout, AccountLayoutComponent, IProps as IAccountLayoutProps };
