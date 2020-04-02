import buildRouteTree from 'build-route-tree';

export const routes = buildRouteTree({
  auth: {
    restore: null,
    signIn: null,
    signUp: null,
    account: null,
  },
});
