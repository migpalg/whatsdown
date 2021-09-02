// @packages
import { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const AuthRouter = lazy(() => import('@app/features/auth/router'));

export const RootRouter = () => {
  return (
    <Switch>
      <Route path={`/auth`} component={AuthRouter} />
    </Switch>
  );
};
