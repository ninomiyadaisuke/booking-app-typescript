import React from "react";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
