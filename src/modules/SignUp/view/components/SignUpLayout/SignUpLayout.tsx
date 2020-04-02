import React from 'react';
import { withAsyncFeatures } from 'core';
import * as features from 'features';

import { Layout } from '../../../../shared/Layout/Layout';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

function SignUpLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Authorization } = containers;
  return (
    <Layout>
      <Authorization type="signUp" path="/signIn" />
    </Layout>
  );
}
const SignUpLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignUpLayoutComponent);

export { SignUpLayout, SignUpLayoutComponent, IProps as ISignInLayoutProps };
