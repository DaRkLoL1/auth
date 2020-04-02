import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { SignUpLayout } from './view/components';

const SignUp: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.signUp.getElementKey()}
        path={routes.signUp.getRoutePath()}
        component={SignUpLayout}
      />
    );
  },
};

export { SignUp };
