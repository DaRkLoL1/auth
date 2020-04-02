import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { AccountLayout } from './view/components';

const Account: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.account.getElementKey()}
        path={routes.account.getRoutePath()}
        component={AccountLayout}
      />
    );
  },
};

export { Account };
