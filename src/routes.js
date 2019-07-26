import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./Inventory";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route component={Inventory} exact path="/" />
    <Route component={Form} path="/form" />
  </Switch>
);
