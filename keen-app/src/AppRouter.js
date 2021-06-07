import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./consts";
import DoctorsPage from "./containers/DoctorsPage";
import HomePage from "./containers/HomePage";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={routes.doctors}>
          <DoctorsPage />
        </Route>

        <Route exact path={routes.home}>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
