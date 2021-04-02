import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {} from "./components/";

import { TopNav, PrivateRoute } from "./components";
import { Home } from "./booking";
import { Login } from "./auth";
import { Register } from "./auth";
import { Dashboard, DashboardSeller } from "./user";
import { NewHotel } from "./hotels";
import { StripeCallback } from "./stripe";

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
        <PrivateRoute
          exact
          path="/dashboard/seller"
          component={DashboardSeller}
        />
        <PrivateRoute exact path="/hotels/new" component={NewHotel} />
        <PrivateRoute exact path="/stripe/callback" component={StripeCallback} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
