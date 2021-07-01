import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouter } from "./guards/PrivateRouter";
import { PublicRouter } from "../routers/guards/PublicRouter";

import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/login"
            component={LoginPage}
            isAuthenticated={user.logged}
          />

          <PrivateRouter
            path="/"
            component={DashboardRouter}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
