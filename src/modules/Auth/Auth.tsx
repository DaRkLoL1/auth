import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignInLayout, SignUpLayout, RestoreLayout, AccountLayout } from './view/components';

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
            component={SignInLayout}
          />
          <Route
            key={routes.auth.signUp.getElementKey()}
            path={routes.auth.signUp.getRoutePath()}
            component={SignUpLayout}
          />
          <Route
            key={routes.auth.restore.getElementKey()}
            path={routes.auth.restore.getRoutePath()}
            component={RestoreLayout}
          />
          <Route
            key={routes.auth.account.getElementKey()}
            path={routes.auth.account.getRoutePath()}
            component={AccountLayout}
          />
        </Switch>
      </Route>
    );
  },
};

export { Auth };
