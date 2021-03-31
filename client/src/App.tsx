import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {} from "./components/";

import { TopNav, PrivateRoute } from "./components";
import { Home } from "./booking";
import { Login } from "./auth";
import { Register } from "./auth";
import { Dashboard } from "./user";

type test = {
  exact:boolean
  path:string
  component:React.FC
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position={"top-center"} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
