import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignInAuthLayout, SignUpAuthLayout, RestoreAuthLayout, AccountAuthLayout } from './view/components';

const Auth: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.auth.getElementKey()}
        path={routes.auth.getRoutePath()}
      >
        <Switch>
          <Route
            key={routes.auth.signIn.getElementKey()}
            path={routes.auth.signIn.getRoutePath()}
            component={SignInAuthLayout}
          />
          <Route
            key={routes.auth.signUp.getElementKey()}
            path={routes.auth.signUp.getRoutePath()}
            component={SignUpAuthLayout}
          />
          <Route
            key={routes.auth.restore.getElementKey()}
            path={routes.auth.restore.getRoutePath()}
            component={RestoreAuthLayout}
          />
          <Route
            key={routes.auth.account.getElementKey()}
            path={routes.auth.account.getRoutePath()}
            component={AccountAuthLayout}
          />
        </Switch>
      </Route>
    );
  },
};

export { Auth };
