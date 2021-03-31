import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { userAuth,authRoute } from "../types";



const PrivateRoute: React.FC<authRoute> = ({ ...rest }) => {
  const selector = useSelector((state: userAuth) => ({ ...state }));
  const auth = selector.auth;
  return auth && auth.token ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
