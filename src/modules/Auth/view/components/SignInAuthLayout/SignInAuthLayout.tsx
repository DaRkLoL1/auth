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

function SignInAuthLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { SignIn } = containers;
  return (
    <Layout>
      <SignIn path={redirectToSignUp} restorePath={redirectToRestore} />
    </Layout>
  );

  function redirectToSignUp() {
    const { history } = props;
    history.push(routes.auth.signUp.getRedirectPath());
  }

  function redirectToRestore() {
    const { history } = props;
    history.push(routes.auth.restore.getRedirectPath());
  }
}

const SignInAuthLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignInAuthLayoutComponent);

export { SignInAuthLayout, SignInAuthLayoutComponent, IProps as ISignInLayoutProps };
