import React from 'react';
import { withAsyncFeatures } from 'core';
import { History } from 'history';
import * as features from 'features';

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
      <Account onExitClick={redirectToSignIn} />
    </Layout>
  );

  function redirectToSignIn(): string {
    return routes.auth.signIn.getRedirectPath();
  }
}

const AccountLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(AccountLayoutComponent);

export { AccountLayout, AccountLayoutComponent, IProps as IAccountLayoutProps };
