import { Switch, Route } from "react-router";

import ROUTES from "./config/routes";

import { LogIn, SignUp, Dashboard, User, Search, Favorites } from "./pages";

function Routes() {
  const { LOGIN, SIGNUP, DASHBOARD, USER, SEARCH, FAVORITES } = ROUTES;

  return (
    <Switch>
      <Route path={LOGIN} exact>
        <LogIn />
      </Route>
      <Route path={SIGNUP}>
        <SignUp />
      </Route>
      <Route path={DASHBOARD}>
        <Dashboard />
      </Route>
      <Route path={USER}>
        <User />
      </Route>
      <Route path={SEARCH}>
        <Search />
      </Route>
      <Route path={FAVORITES}>
        <Favorites />
      </Route>
      <Route>
        <h1>ERROR PAGE HERE</h1>
      </Route>
    </Switch>
  );
}

export default Routes;
