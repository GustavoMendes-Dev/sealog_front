import React from "react";
import { Route, BrowserRouter as Routers, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { AppProvider } from "./providers/appProvider";

export default function Routes() {
  return (
    <Routers>
      <AppProvider>
        <Switch>
          <Route exact component={Dashboard} path="/" />
        </Switch>
      </AppProvider>
    </Routers>
  );
}
