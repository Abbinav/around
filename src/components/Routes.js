import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Home2 from "./homeTwo";
import ResultScreen from "./results";
import SignUp from "./signup";
import Login from "./login";
import ItemPage from "./ItemPage";

export default () =>
  <Switch>
    <Route path="/" exact component={Home2} />
    //every path matches "/", so we must use "exact" keyword
    <Route path="/results" component={ResultScreen} />
    <Route path = "/signup" component = {SignUp} />
    <Route path = "/login" component = {Login} />
    <Route path = "/ItemPage" component = {ItemPage} />
  </Switch>;