import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignInLayout } from './view/components';

const SignIn: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.signIn.getElementKey()}
        path={routes.signIn.getRoutePath()}
        component={SignInLayout}
      />
    );
  },
};

export { SignIn };
