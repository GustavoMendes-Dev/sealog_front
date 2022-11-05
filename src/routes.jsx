import React from "react";
import { Route, BrowserRouter as Routers, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Travels from "./pages/Travels";
import { AppProvider } from "./providers/appProvider";
import { TravelsProvider } from "./providers/travelsProvider";

export default function Routes() {
  return (
    <Routers>
      <AppProvider>
        <Switch>
          <Route exact component={Dashboard} path="/" />
        </Switch>

        <Switch>
          <TravelsProvider>
            <Route exact component={Travels} path="/travels" />
          </TravelsProvider>
        </Switch>
      </AppProvider>
    </Routers>
  );
}
