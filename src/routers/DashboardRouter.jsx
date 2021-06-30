import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MarvelPage } from "../pages/MarvelPage";
import { DCPage } from "../pages/DCPage";
import { HeroPage } from "../pages/HeroPage";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/dc" component={DCPage} />
          <Route exact path="/heroe/:heroeId" component={HeroPage} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
