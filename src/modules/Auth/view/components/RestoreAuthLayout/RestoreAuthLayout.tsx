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

function RestoreAuthLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Restore } = containers;

  return (
    <Layout>
      <Restore path={redirectToSignIn} />
    </Layout>
  );

  function redirectToSignIn() {
    const { history } = props;
    history.push(routes.auth.signIn.getRedirectPath());
  }
}

const RestoreAuthLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(RestoreAuthLayoutComponent);

export { RestoreAuthLayout, RestoreAuthLayoutComponent, IProps as IRestoreLayoutProps };
