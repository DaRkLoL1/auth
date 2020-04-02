import { routes as signInRoutes } from './SignIn/routes';
import { routes as signUpRoutes } from './SignUp/routes';
import { routes as accountRoutes } from './Account/routes';
import { routes as restoreRoutes } from './Restore/routes';

export const routes = {
  ...signInRoutes,
  ...signUpRoutes,
  ...accountRoutes,
  ...restoreRoutes,
};
