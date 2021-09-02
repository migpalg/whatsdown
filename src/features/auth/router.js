// @packages
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// @scripts
import { LoginScreen } from './screens';

export const AuthRouter = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/sign-in`} component={LoginScreen} />
    </Switch>
  );
};

export default AuthRouter;
