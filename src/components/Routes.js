import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import ResultScreen from "./results";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    //every path matches "/", so we must use "exact" keyword
    <Route path="/results" component={ResultScreen} />
  </Switch>;