import React from 'react';
import { withAsyncFeatures } from 'core';
import { History } from 'history';
import * as features from 'features';

import { Layout } from '../../../../shared/Layout/Layout';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

function AccountAuthLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Account } = containers;
  return (
    <Layout>
      <Account />
    </Layout>
  );
}
const AccountAuthLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(AccountAuthLayoutComponent);

export { AccountAuthLayout, AccountAuthLayoutComponent, IProps as IAccountLayoutProps };
