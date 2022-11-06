import React from "react";
import { QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Routers, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Travels from "./pages/Travels";
import TravelShow from "./pages/TravelShow";
import Vessel from "./pages/Vessel";
import { AppProvider } from "./providers/appProvider";
import { TravelsProvider } from "./providers/travelsProvider";
import { queryClient } from "./services/queryClient";

export default function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routers>
        <AppProvider>
          <Switch>
            <Route exact component={Dashboard} path="/" />
          </Switch>

          <Switch>
            <TravelsProvider>
              <Route exact component={Travels} path="/travels" />
              <Route exact component={TravelShow} path="/travels/:id" />
              <Route exact component={Vessel} path="/vessel" />
            </TravelsProvider>
          </Switch>
        </AppProvider>
      </Routers>
    </QueryClientProvider>
  );
}
