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

function RestoreLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Restore } = containers;

  return (
    <Layout>
      <Restore accountRedirect={redirectToAccount} onRedirectClick={redirectToSignIn} />
    </Layout>
  );

  function redirectToSignIn() {
    const { history } = props;
    history.push(routes.auth.signIn.getRedirectPath());
  }

  function redirectToAccount(): string {
    return routes.auth.account.getRedirectPath();
  }
}

const RestoreLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(RestoreLayoutComponent);

export { RestoreLayout, RestoreLayoutComponent, IProps as IRestoreLayoutProps };
