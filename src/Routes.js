import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES_CONFIG } from "./config/routes";

function Routes() {
  return (
    <Switch>
      {ROUTES_CONFIG.map((route) => {
        const Page = route.page;
        const Guard = route.guard;

        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Page {...props} path={route.path} />
              </Guard>
            )}
          />
        );
      })}

      <Route render={() => <Redirect to="/not-found" />} />
    </Switch>
  );
}

export default Routes;
