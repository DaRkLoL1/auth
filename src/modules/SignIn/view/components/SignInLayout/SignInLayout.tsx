import React from 'react';
import { withAsyncFeatures } from 'core';
import * as features from 'features';

import { Layout } from '../../../../shared/Layout/Layout';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

function SignInLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Authorization } = containers;
  return (
    <Layout>
      <Authorization type="signIn" path="/signUp" restorePath="/restore" />
    </Layout>
  );
}
const SignInLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignInLayoutComponent);

export { SignInLayout, SignInLayoutComponent, IProps as ISignInLayoutProps };
