import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ClickGame } from "./pages/ClickGame";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:team" component={ClickGame} />
      </Switch>
    </BrowserRouter>
  );
};
