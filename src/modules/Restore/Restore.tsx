import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from 'modules/routes';
import { IModule } from 'shared/types/app';

import { RestoreLayout } from './view/components';

const Restore: IModule = {
  getRoutes() {
    return (
      <Route
        key={routes.restore.getElementKey()}
        path={routes.restore.getRoutePath()}
        component={RestoreLayout}
      />
    );
  },
};

export { Restore };
