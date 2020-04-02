import React from 'react';
import { withAsyncFeatures } from 'core';
import * as features from 'features';

import { Layout } from '../../../../shared/Layout/Layout';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

function AccountLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Authorization } = containers;
  return (
    <Layout>
      <Authorization type="account" />
    </Layout>
  );
}
const AccountLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(AccountLayoutComponent);

export { AccountLayout, AccountLayoutComponent, IProps as ISignInLayoutProps };
