import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DCPage } from "../pages/DCPage";
import { HeroPage } from "../pages/HeroPage";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/dc" component={DCPage} />
          <Route exact path="/hero/:heroId" component={HeroPage} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
