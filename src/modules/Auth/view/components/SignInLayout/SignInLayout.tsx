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

function SignInLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { SignIn } = containers;
  return (
    <Layout>
      <SignIn
        onSuccessSignIn={redirectToAccount}
        onRedirectClick={redirectToSignUp}
        onRedirectToRestoreClick={redirectToRestore}
      />
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

  function redirectToAccount(): void {
    const { history } = props;
    history.push(routes.auth.account.getRedirectPath());
  }
}

const SignInLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignInLayoutComponent);

export { SignInLayout, SignInLayoutComponent, IProps as ISignInLayoutProps };
