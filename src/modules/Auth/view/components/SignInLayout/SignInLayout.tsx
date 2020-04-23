import React from 'react';
import { autobind } from 'core-decorators';
import { History } from 'history';

import { withAsyncFeatures } from 'core';
import * as features from 'features';

import { Layout } from '../../../../shared/Layout/Layout';
import { routes } from '../../../routes';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

class SignInLayoutComponent extends React.Component<IProps> {
  render() {
    const { authorizationFeatureEntry: { containers } } = this.props;
    const { SignIn } = containers;

    return (
      <Layout>
        <SignIn
          onSuccessSignIn={this.redirectToAccount}
        />
      </Layout>
    );
  }

  @autobind
  redirectToAccount(): void {
    const { history } = this.props;
    history.push(routes.auth.account.getRedirectPath());
  }
}

const SignInLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignInLayoutComponent);

export { SignInLayout, SignInLayoutComponent, IProps as ISignInLayoutProps };
