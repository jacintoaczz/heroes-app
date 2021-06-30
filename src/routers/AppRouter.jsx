import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LoginPage } from "../pages/LoginPage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </Router>
  );
};
