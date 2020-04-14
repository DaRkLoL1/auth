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

function SignUpLayoutComponent(props: IProps) {
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

const SignUpLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignUpLayoutComponent);

export { SignUpLayout, SignUpLayoutComponent, IProps as ISignUpLayoutProps };
