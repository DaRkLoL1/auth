import React from 'react';
import { History } from 'history';
import { autobind } from 'core-decorators';

import * as features from 'features';
import { withAsyncFeatures } from 'core';

import { Layout } from '../../../../shared/Layout/Layout';
import { routes } from '../../../routes';

interface IFeatureProps {
  authorizationFeatureEntry: features.authorization.Entry;
  history: History;
}

type IProps = IFeatureProps;

class SignUpLayoutComponent extends React.Component<IProps> {
  render() {
    const { authorizationFeatureEntry: { containers } } = this.props;
    const { SignUp } = containers;

    return (
      <Layout>
        <SignUp onSuccessSignUp={this.redirectToAccount} />
      </Layout>
    );
  }

  @autobind
  redirectToAccount(): void {
    const { history } = this.props;
    history.push(routes.auth.account.getRedirectPath());
  }
}

const SignUpLayout = withAsyncFeatures({
  authorizationFeatureEntry: features.authorization.loadEntry,
})(SignUpLayoutComponent);

export { SignUpLayout, SignUpLayoutComponent, IProps as ISignUpLayoutProps };
