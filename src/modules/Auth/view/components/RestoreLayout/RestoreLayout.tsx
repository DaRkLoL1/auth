import React from 'react';
import { withAsyncFeatures } from 'core';
import * as features from 'features';

import { Layout } from '../../../../shared/Layout/Layout';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
}

type IProps = IFeatureProps;

function RestoreLayoutComponent(props: IProps) {
  const { authorizationFeatureEntry: { containers } } = props;
  const { Restore } = containers;

  return (
    <Layout>
      <Restore />
    </Layout>
  );
}

const RestoreLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(RestoreLayoutComponent);

export { RestoreLayout, RestoreLayoutComponent, IProps as IRestoreLayoutProps };
