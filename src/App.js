import React from "react";

import { Route, Switch } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
