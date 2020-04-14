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

function SignUpAuthLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { SignUp } = containers;

  return (
    <Layout>
      <SignUp path={redirectToSignIn} />
    </Layout>
  );

  function redirectToSignIn() {
    const { history } = props;
    history.push(routes.auth.signIn.getRedirectPath());
  }
}

const SignUpAuthLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignUpAuthLayoutComponent);

export { SignUpAuthLayout, SignUpAuthLayoutComponent, IProps as ISignUpLayoutProps };
